import java.util.Scanner;

public class HillCipher {

  private static int[][] keyMatrix;

  // Function to initialize the key matrix
  private static void initializeKeyMatrix(String key, int size) {
    keyMatrix = new int[size][size];

    // Fill the key matrix with values from the key string
    int index = 0;
    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        keyMatrix[i][j] = key.charAt(index++) - 'A'; // Assuming uppercase English letters
      }
    }
  }

  // Function to calculate the determinant of a matrix
  private static int determinant(int[][] matrix, int size) {
    if (size == 1) {
      return matrix[0][0];
    }
    if (size == 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    int det = 0;
    for (int i = 0; i < size; i++) {
      int[][] minor = new int[size - 1][size - 1];
      for (int j = 1; j < size; j++) {
        for (int k = 0; k < size; k++) {
          if (k < i) {
            minor[j - 1][k] = matrix[j][k];
          } else if (k > i) {
            minor[j - 1][k - 1] = matrix[j][k];
          }
        }
      }
      det += Math.pow(-1, i) * matrix[0][i] * determinant(minor, size - 1);
    }
    return det;
  }

  // Function to calculate the modulo inverse of a number
  private static int modInverse(int a, int m) {
    a %= m;
    for (int x = 1; x < m; x++) {
      if ((a * x) % m == 1) {
        return x;
      }
    }
    return 1;
  }

  // Function to calculate the cofactor matrix of a matrix
  private static int[][] cofactor(int[][] matrix, int size) {
    int[][] cofactorMatrix = new int[size][size];

    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        int[][] minor = new int[size - 1][size - 1];
        for (int x = 0; x < size; x++) {
          for (int y = 0; y < size; y++) {
            if (x != i && y != j) {
              int minorX = (x < i) ? x : x - 1;
              int minorY = (y < j) ? y : y - 1;
              minor[minorX][minorY] = matrix[x][y];
            }
          }
        }
        cofactorMatrix[i][j] = (int) (Math.pow(-1, i + j) * determinant(minor, size - 1));
      }
    }
    return cofactorMatrix;
  }

  // Function to transpose a matrix
  private static int[][] transpose(int[][] matrix, int size) {
    int[][] transposed = new int[size][size];

    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        transposed[i][j] = matrix[j][i];
      }
    }
    return transposed;
  }

  // Function to multiply two matrices
  private static int[][] multiplyMatrices(int[][] matrix1, int[][] matrix2, int size) {
    int[][] result = new int[size][size];

    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        for (int k = 0; k < size; k++) {
          result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
        result[i][j] %= 26; // Mod 26 operation for letters
      }
    }
    return result;
  }

  // Function to encrypt a message using Hill Cipher
  private static String encrypt(String message, int size) {
    String paddedMessage = message;
    if (message.length() % size != 0) {
      // Padding the message with 'X' if its length is not divisible by the key matrix size
      paddedMessage += new String(new char[size - message.length() % size]).replace('\0', 'X');
    }

    StringBuilder encryptedMessage = new StringBuilder();
    for (int i = 0; i < paddedMessage.length(); i += size) {
      String segment = paddedMessage.substring(i, i + size);
      int[][] segmentMatrix = new int[size][1];

      for (int j = 0; j < size; j++) {
        segmentMatrix[j][0] = segment.charAt(j) - 'A'; // Assuming uppercase English letters
      }

      int[][] encryptedSegmentMatrix = multiplyMatrices(keyMatrix, segmentMatrix, size);

      for (int[] row : encryptedSegmentMatrix) {
        encryptedMessage.append((char) (row[0] + 'A')); // Convert to character
      }
    }
    return encryptedMessage.toString();
  }

  // Function to decrypt a message using Hill Cipher
  private static String decrypt(String encryptedMessage, int size) {
    int inverseDet = modInverse(determinant(keyMatrix, size), 26);
    if (inverseDet == 0) {
      return "Key is not invertible";
    }

    int[][] keyMatrixInverse = cofactor(keyMatrix, size);
    keyMatrixInverse = transpose(keyMatrixInverse, size);

    for (int i = 0; i < size; i++) {
      for (int j = 0; j < size; j++) {
        keyMatrixInverse[i][j] = (keyMatrixInverse[i][j] * inverseDet) % 26;
        if (keyMatrixInverse[i][j] < 0) {
          keyMatrixInverse[i][j] += 26;
        }
      }
    }

    StringBuilder decryptedMessage = new StringBuilder();
    for (int i = 0; i < encryptedMessage.length(); i += size) {
      String segment = encryptedMessage.substring(i, i + size);
      int[][] segmentMatrix = new int[size][1];

      for (int j = 0; j < size; j++) {
        segmentMatrix[j][0] = segment.charAt(j) - 'A'; // Assuming uppercase English letters
      }

      int[][] decryptedSegmentMatrix = multiplyMatrices(keyMatrixInverse, segmentMatrix, size);

      for (int[] row : decryptedSegmentMatrix) {
        decryptedMessage.append((char) (row[0] + 'A')); // Convert to character
      }
    }
    return decryptedMessage.toString();
  }
}
