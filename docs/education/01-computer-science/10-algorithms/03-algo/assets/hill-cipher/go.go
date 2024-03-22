package main

import (
    "math"
)

// Define the key matrix
var keyMatrix [][]int

// Function to initialize the key matrix
func initializeKeyMatrix(key string, size int) {
    keyMatrix = make([][]int, size)
    for i := range keyMatrix {
        keyMatrix[i] = make([]int, size)
    }

    // Fill the key matrix with values from the key string
    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            keyMatrix[i][j] = int(key[i*size+j]) - 65 // Assuming uppercase English letters
        }
    }
}

// Function to calculate the determinant of a matrix
func determinant(matrix [][]int, size int) int {
    if size == 1 {
        return matrix[0][0]
    }
    if size == 2 {
        return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]
    }

    det := 0
    for i := 0; i < size; i++ {
        minor := make([][]int, size-1)
        for j := range minor {
            minor[j] = make([]int, size-1)
        }

        for j := 1; j < size; j++ {
            for k := 0; k < size; k++ {
                if k < i {
                    minor[j-1][k] = matrix[j][k]
                } else if k > i {
                    minor[j-1][k-1] = matrix[j][k]
                }
            }
        }
        det += int(math.Pow(-1, float64(i))) * matrix[0][i] * determinant(minor, size-1)
    }
    return det
}

// Function to calculate the modulo inverse of a number
func modInverse(a, m int) int {
    a %= m
    for x := 1; x < m; x++ {
        if (a*x)%m == 1 {
            return x
        }
    }
    return 1
}

// Function to calculate the cofactor matrix of a matrix
func cofactor(matrix [][]int, size int) [][]int {
    cofactorMatrix := make([][]int, size)
    for i := range cofactorMatrix {
        cofactorMatrix[i] = make([]int, size)
    }

    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            minor := make([][]int, size-1)
            for k := range minor {
                minor[k] = make([]int, size-1)
            }

            for x := 0; x < size; x++ {
                for y := 0; y < size; y++ {
                    if x != i && y != j {
                        minorX, minorY := 0, 0
                        if x < i {
                            minorX = x
                        } else {
                            minorX = x - 1
                        }
                        if y < j {
                            minorY = y
                        } else {
                            minorY = y - 1
                        }
                        minor[minorX][minorY] = matrix[x][y]
                    }
                }
            }
            cofactorMatrix[i][j] = int(math.Pow(-1, float64(i+j))) * determinant(minor, size-1)
        }
    }
    return cofactorMatrix
}

// Function to transpose a matrix
func transpose(matrix [][]int, size int) [][]int {
    transposed := make([][]int, size)
    for i := range transposed {
        transposed[i] = make([]int, size)
    }

    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            transposed[i][j] = matrix[j][i]
        }
    }
    return transposed
}

// Function to multiply two matrices
func multiplyMatrices(matrix1, matrix2 [][]int, size int) [][]int {
    result := make([][]int, size)
    for i := range result {
        result[i] = make([]int, size)
    }

    for i := 0; i < size; i++ {
        for j := 0; j < size; j++ {
            for k := 0; k < size; k++ {
                result[i][j] += matrix1[i][k] * matrix2[k][j]
            }
            result[i][j] %= 26
        }
    }
    return result
}

// Function to encrypt a message using Hill Cipher
func encrypt(message string) string {
    size := len(keyMatrix)
    paddedMessage := message
    if len(message)%size != 0 {
        // Padding the message with 'X' if its length is not divisible by the key matrix size
        paddedMessage += string('X' * (size - len(message)%size))
    }

    encryptedMessage := ""
    for i := 0; i < len(paddedMessage); i += size {
        segment := paddedMessage[i : i+size]
        segmentMatrix := make([][]int, size)
        for j := range segmentMatrix {
            segmentMatrix[j] = make([]int, 1)
        }

        for j := 0; j < size; j++ {
            segmentMatrix[j][0] = int(segment[j]) - 65 // Assuming uppercase English letters
        }

        encryptedSegmentMatrix := multiplyMatrices(keyMatrix, segmentMatrix, size)

        for j := 0; j < size; j++ {
            encryptedMessage += string(encryptedSegmentMatrix[j][0] + 65)
        }
    }
    return encryptedMessage
}

// Function to decrypt a message using Hill Cipher
func decrypt(encryptedMessage string) string {
    size := len(keyMatrix)

    inverseDet := modInverse(determinant(keyMatrix, size), 26)
    if inverseDet == 0 {
        return "Key is not invertible"
    }

    keyMatrixInverse := cofactor(keyMatrix, size)
    keyMatrixInverse = transpose(keyMatrixInverse, size)

    for i := range keyMatrixInverse {
        for j := range keyMatrixInverse[i] {
            keyMatrixInverse[i][j] = (keyMatrixInverse[i][j] * inverseDet) % 26
            if keyMatrixInverse[i][j] < 0 {
                keyMatrixInverse[i][j] += 26
            }
        }
    }

    decryptedMessage := ""
    for i := 0; i < len(encryptedMessage); i += size {
        segment := encryptedMessage[i : i+size]
        segmentMatrix := make([][]int, size)
        for j := range segmentMatrix {
            segmentMatrix[j] = make([]int, 1)
        }

        for j := 0; j < size; j++ {
            segmentMatrix[j][0] = int(segment[j]) - 65 // Assuming uppercase English letters
        }

        decryptedSegmentMatrix := multiplyMatrices(keyMatrixInverse, segmentMatrix, size)

        for j := 0; j < size; j++ {
            decryptedMessage += string(decryptedSegmentMatrix[j][0] + 65)
        }
    }
    return decryptedMessage
}
