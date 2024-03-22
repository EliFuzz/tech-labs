import kotlin.math.pow

// Function to initialize the key matrix
fun initializeKeyMatrix(key: String, size: Int): Array<IntArray> {
    val keyMatrix = Array(size) { IntArray(size) }
    var index = 0
    for (i in 0 until size) {
        for (j in 0 until size) {
            keyMatrix[i][j] = key[index].toInt() - 65 // Assuming uppercase English letters
            index++
        }
    }
    return keyMatrix
}

// Function to calculate the determinant of a matrix
fun determinant(matrix: Array<IntArray>): Int {
    val size = matrix.size
    if (size == 1) {
        return matrix[0][0]
    }
    if (size == 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }

    var det = 0
    for (i in 0 until size) {
        val minor = Array(size - 1) { IntArray(size - 1) }
        for (j in 1 until size) {
            for (k in 0 until size) {
                if (k < i) {
                    minor[j - 1][k] = matrix[j][k]
                } else if (k > i) {
                    minor[j - 1][k - 1] = matrix[j][k]
                }
            }
        }
        det += (-1.0).pow(i) * matrix[0][i] * determinant(minor)
    }
    return det.toInt()
}

// Function to calculate the modulo inverse of a number
fun modInverse(a: Int, m: Int): Int {
    var a = a
    a %= m
    for (x in 1 until m) {
        if (a * x % m == 1) {
            return x
        }
    }
    return 1
}

// Function to calculate the cofactor matrix of a matrix
fun cofactor(matrix: Array<IntArray>): Array<IntArray> {
    val size = matrix.size
    val cofactorMatrix = Array(size) { IntArray(size) }

    for (i in 0 until size) {
        for (j in 0 until size) {
            val minor = Array(size - 1) { IntArray(size - 1) }
            for (x in 0 until size) {
                for (y in 0 until size) {
                    if (x != i && y != j) {
                        val minorX = if (x < i) x else x - 1
                        val minorY = if (y < j) y else y - 1
                        minor[minorX][minorY] = matrix[x][y]
                    }
                }
            }
            cofactorMatrix[i][j] = (-1.0).pow(i + j) * determinant(minor)
        }
    }
    return cofactorMatrix
}

// Function to transpose a matrix
fun transpose(matrix: Array<IntArray>): Array<IntArray> {
    val size = matrix.size
    val transposed = Array(size) { IntArray(size) }

    for (i in 0 until size) {
        for (j in 0 until size) {
            transposed[i][j] = matrix[j][i]
        }
    }
    return transposed
}

// Function to multiply two matrices
fun multiplyMatrices(matrix1: Array<IntArray>, matrix2: Array<IntArray>): Array<IntArray> {
    val size = matrix1.size
    val result = Array(size) { IntArray(size) }

    for (i in 0 until size) {
        for (j in 0 until size) {
            for (k in 0 until size) {
                result[i][j] += matrix1[i][k] * matrix2[k][j]
            }
            result[i][j] %= 26 // Mod 26 operation for letters
        }
    }
    return result
}

// Function to encrypt a message using Hill Cipher
fun encrypt(message: String, key: String): String {
    val size = kotlin.math.sqrt(key.length.toDouble()).toInt()
    val keyMatrix = initializeKeyMatrix(key, size)
    val paddedMessage = message + "X".repeat(size - (message.length % size)) // Padding with 'X'
    var encryptedMessage = ""
    for (i in paddedMessage.indices step size) {
        val segment = paddedMessage.substring(i, i + size)
        val segmentMatrix = segment.map { it.toInt() - 65 }.toIntArray() // Assuming uppercase English letters
        val encryptedSegmentMatrix = multiplyMatrices(keyMatrix, arrayOf(segmentMatrix))
        encryptedMessage += encryptedSegmentMatrix.flatten().joinToString("") { (it + 65).toChar().toString() } // Convert back to letters
    }
    return encryptedMessage
}

// Function to decrypt a message using Hill Cipher
fun decrypt(encryptedMessage: String, key: String): String {
    val size = kotlin.math.sqrt(key.length.toDouble()).toInt()
    val keyMatrix = initializeKeyMatrix(key, size)
    val inverseDet = modInverse(determinant(keyMatrix), 26)
    if (inverseDet == 0) {
        return "Key is not invertible"
    }
    val keyMatrixInverse = cofactor(keyMatrix).map { row -> row.map { (it * inverseDet) % 26 }.toIntArray() }
    var decryptedMessage = ""
    for (i in encryptedMessage.indices step size) {
        val segment = encryptedMessage.substring(i, i + size)
        val segmentMatrix = segment.map { it.toInt() - 65 }.toIntArray() // Assuming uppercase English letters
        val decryptedSegmentMatrix = multiplyMatrices(keyMatrixInverse, arrayOf(segmentMatrix))
        decryptedMessage += decryptedSegmentMatrix.flatten().joinToString("") { (it + 26) % 26 + 65 }.toInt().toChar().toString() // Convert back to letters
    }
    return decryptedMessage
}
