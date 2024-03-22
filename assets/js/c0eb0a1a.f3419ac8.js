"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5714],{61082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>y,default:()=>M,frontMatter:()=>g,metadata:()=>h,toc:()=>z});var i=t(11527),r=t(88672),s=t(29140),a=t(52360),o=t(52296);const l='package main\n\nimport (\n    "math"\n)\n\n// Define the key matrix\nvar keyMatrix [][]int\n\n// Function to initialize the key matrix\nfunc initializeKeyMatrix(key string, size int) {\n    keyMatrix = make([][]int, size)\n    for i := range keyMatrix {\n        keyMatrix[i] = make([]int, size)\n    }\n\n    // Fill the key matrix with values from the key string\n    for i := 0; i < size; i++ {\n        for j := 0; j < size; j++ {\n            keyMatrix[i][j] = int(key[i*size+j]) - 65 // Assuming uppercase English letters\n        }\n    }\n}\n\n// Function to calculate the determinant of a matrix\nfunc determinant(matrix [][]int, size int) int {\n    if size == 1 {\n        return matrix[0][0]\n    }\n    if size == 2 {\n        return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]\n    }\n\n    det := 0\n    for i := 0; i < size; i++ {\n        minor := make([][]int, size-1)\n        for j := range minor {\n            minor[j] = make([]int, size-1)\n        }\n\n        for j := 1; j < size; j++ {\n            for k := 0; k < size; k++ {\n                if k < i {\n                    minor[j-1][k] = matrix[j][k]\n                } else if k > i {\n                    minor[j-1][k-1] = matrix[j][k]\n                }\n            }\n        }\n        det += int(math.Pow(-1, float64(i))) * matrix[0][i] * determinant(minor, size-1)\n    }\n    return det\n}\n\n// Function to calculate the modulo inverse of a number\nfunc modInverse(a, m int) int {\n    a %= m\n    for x := 1; x < m; x++ {\n        if (a*x)%m == 1 {\n            return x\n        }\n    }\n    return 1\n}\n\n// Function to calculate the cofactor matrix of a matrix\nfunc cofactor(matrix [][]int, size int) [][]int {\n    cofactorMatrix := make([][]int, size)\n    for i := range cofactorMatrix {\n        cofactorMatrix[i] = make([]int, size)\n    }\n\n    for i := 0; i < size; i++ {\n        for j := 0; j < size; j++ {\n            minor := make([][]int, size-1)\n            for k := range minor {\n                minor[k] = make([]int, size-1)\n            }\n\n            for x := 0; x < size; x++ {\n                for y := 0; y < size; y++ {\n                    if x != i && y != j {\n                        minorX, minorY := 0, 0\n                        if x < i {\n                            minorX = x\n                        } else {\n                            minorX = x - 1\n                        }\n                        if y < j {\n                            minorY = y\n                        } else {\n                            minorY = y - 1\n                        }\n                        minor[minorX][minorY] = matrix[x][y]\n                    }\n                }\n            }\n            cofactorMatrix[i][j] = int(math.Pow(-1, float64(i+j))) * determinant(minor, size-1)\n        }\n    }\n    return cofactorMatrix\n}\n\n// Function to transpose a matrix\nfunc transpose(matrix [][]int, size int) [][]int {\n    transposed := make([][]int, size)\n    for i := range transposed {\n        transposed[i] = make([]int, size)\n    }\n\n    for i := 0; i < size; i++ {\n        for j := 0; j < size; j++ {\n            transposed[i][j] = matrix[j][i]\n        }\n    }\n    return transposed\n}\n\n// Function to multiply two matrices\nfunc multiplyMatrices(matrix1, matrix2 [][]int, size int) [][]int {\n    result := make([][]int, size)\n    for i := range result {\n        result[i] = make([]int, size)\n    }\n\n    for i := 0; i < size; i++ {\n        for j := 0; j < size; j++ {\n            for k := 0; k < size; k++ {\n                result[i][j] += matrix1[i][k] * matrix2[k][j]\n            }\n            result[i][j] %= 26\n        }\n    }\n    return result\n}\n\n// Function to encrypt a message using Hill Cipher\nfunc encrypt(message string) string {\n    size := len(keyMatrix)\n    paddedMessage := message\n    if len(message)%size != 0 {\n        // Padding the message with \'X\' if its length is not divisible by the key matrix size\n        paddedMessage += string(\'X\' * (size - len(message)%size))\n    }\n\n    encryptedMessage := ""\n    for i := 0; i < len(paddedMessage); i += size {\n        segment := paddedMessage[i : i+size]\n        segmentMatrix := make([][]int, size)\n        for j := range segmentMatrix {\n            segmentMatrix[j] = make([]int, 1)\n        }\n\n        for j := 0; j < size; j++ {\n            segmentMatrix[j][0] = int(segment[j]) - 65 // Assuming uppercase English letters\n        }\n\n        encryptedSegmentMatrix := multiplyMatrices(keyMatrix, segmentMatrix, size)\n\n        for j := 0; j < size; j++ {\n            encryptedMessage += string(encryptedSegmentMatrix[j][0] + 65)\n        }\n    }\n    return encryptedMessage\n}\n\n// Function to decrypt a message using Hill Cipher\nfunc decrypt(encryptedMessage string) string {\n    size := len(keyMatrix)\n\n    inverseDet := modInverse(determinant(keyMatrix, size), 26)\n    if inverseDet == 0 {\n        return "Key is not invertible"\n    }\n\n    keyMatrixInverse := cofactor(keyMatrix, size)\n    keyMatrixInverse = transpose(keyMatrixInverse, size)\n\n    for i := range keyMatrixInverse {\n        for j := range keyMatrixInverse[i] {\n            keyMatrixInverse[i][j] = (keyMatrixInverse[i][j] * inverseDet) % 26\n            if keyMatrixInverse[i][j] < 0 {\n                keyMatrixInverse[i][j] += 26\n            }\n        }\n    }\n\n    decryptedMessage := ""\n    for i := 0; i < len(encryptedMessage); i += size {\n        segment := encryptedMessage[i : i+size]\n        segmentMatrix := make([][]int, size)\n        for j := range segmentMatrix {\n            segmentMatrix[j] = make([]int, 1)\n        }\n\n        for j := 0; j < size; j++ {\n            segmentMatrix[j][0] = int(segment[j]) - 65 // Assuming uppercase English letters\n        }\n\n        decryptedSegmentMatrix := multiplyMatrices(keyMatrixInverse, segmentMatrix, size)\n\n        for j := 0; j < size; j++ {\n            decryptedMessage += string(decryptedSegmentMatrix[j][0] + 65)\n        }\n    }\n    return decryptedMessage\n}\n',m="import java.util.Scanner;\n\npublic class HillCipher {\n\n  private static int[][] keyMatrix;\n\n  // Function to initialize the key matrix\n  private static void initializeKeyMatrix(String key, int size) {\n    keyMatrix = new int[size][size];\n\n    // Fill the key matrix with values from the key string\n    int index = 0;\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        keyMatrix[i][j] = key.charAt(index++) - 'A'; // Assuming uppercase English letters\n      }\n    }\n  }\n\n  // Function to calculate the determinant of a matrix\n  private static int determinant(int[][] matrix, int size) {\n    if (size == 1) {\n      return matrix[0][0];\n    }\n    if (size == 2) {\n      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];\n    }\n\n    int det = 0;\n    for (int i = 0; i < size; i++) {\n      int[][] minor = new int[size - 1][size - 1];\n      for (int j = 1; j < size; j++) {\n        for (int k = 0; k < size; k++) {\n          if (k < i) {\n            minor[j - 1][k] = matrix[j][k];\n          } else if (k > i) {\n            minor[j - 1][k - 1] = matrix[j][k];\n          }\n        }\n      }\n      det += Math.pow(-1, i) * matrix[0][i] * determinant(minor, size - 1);\n    }\n    return det;\n  }\n\n  // Function to calculate the modulo inverse of a number\n  private static int modInverse(int a, int m) {\n    a %= m;\n    for (int x = 1; x < m; x++) {\n      if ((a * x) % m == 1) {\n        return x;\n      }\n    }\n    return 1;\n  }\n\n  // Function to calculate the cofactor matrix of a matrix\n  private static int[][] cofactor(int[][] matrix, int size) {\n    int[][] cofactorMatrix = new int[size][size];\n\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        int[][] minor = new int[size - 1][size - 1];\n        for (int x = 0; x < size; x++) {\n          for (int y = 0; y < size; y++) {\n            if (x != i && y != j) {\n              int minorX = (x < i) ? x : x - 1;\n              int minorY = (y < j) ? y : y - 1;\n              minor[minorX][minorY] = matrix[x][y];\n            }\n          }\n        }\n        cofactorMatrix[i][j] = (int) (Math.pow(-1, i + j) * determinant(minor, size - 1));\n      }\n    }\n    return cofactorMatrix;\n  }\n\n  // Function to transpose a matrix\n  private static int[][] transpose(int[][] matrix, int size) {\n    int[][] transposed = new int[size][size];\n\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        transposed[i][j] = matrix[j][i];\n      }\n    }\n    return transposed;\n  }\n\n  // Function to multiply two matrices\n  private static int[][] multiplyMatrices(int[][] matrix1, int[][] matrix2, int size) {\n    int[][] result = new int[size][size];\n\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        for (int k = 0; k < size; k++) {\n          result[i][j] += matrix1[i][k] * matrix2[k][j];\n        }\n        result[i][j] %= 26; // Mod 26 operation for letters\n      }\n    }\n    return result;\n  }\n\n  // Function to encrypt a message using Hill Cipher\n  private static String encrypt(String message, int size) {\n    String paddedMessage = message;\n    if (message.length() % size != 0) {\n      // Padding the message with 'X' if its length is not divisible by the key matrix size\n      paddedMessage += new String(new char[size - message.length() % size]).replace('\\0', 'X');\n    }\n\n    StringBuilder encryptedMessage = new StringBuilder();\n    for (int i = 0; i < paddedMessage.length(); i += size) {\n      String segment = paddedMessage.substring(i, i + size);\n      int[][] segmentMatrix = new int[size][1];\n\n      for (int j = 0; j < size; j++) {\n        segmentMatrix[j][0] = segment.charAt(j) - 'A'; // Assuming uppercase English letters\n      }\n\n      int[][] encryptedSegmentMatrix = multiplyMatrices(keyMatrix, segmentMatrix, size);\n\n      for (int[] row : encryptedSegmentMatrix) {\n        encryptedMessage.append((char) (row[0] + 'A')); // Convert to character\n      }\n    }\n    return encryptedMessage.toString();\n  }\n\n  // Function to decrypt a message using Hill Cipher\n  private static String decrypt(String encryptedMessage, int size) {\n    int inverseDet = modInverse(determinant(keyMatrix, size), 26);\n    if (inverseDet == 0) {\n      return \"Key is not invertible\";\n    }\n\n    int[][] keyMatrixInverse = cofactor(keyMatrix, size);\n    keyMatrixInverse = transpose(keyMatrixInverse, size);\n\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        keyMatrixInverse[i][j] = (keyMatrixInverse[i][j] * inverseDet) % 26;\n        if (keyMatrixInverse[i][j] < 0) {\n          keyMatrixInverse[i][j] += 26;\n        }\n      }\n    }\n\n    StringBuilder decryptedMessage = new StringBuilder();\n    for (int i = 0; i < encryptedMessage.length(); i += size) {\n      String segment = encryptedMessage.substring(i, i + size);\n      int[][] segmentMatrix = new int[size][1];\n\n      for (int j = 0; j < size; j++) {\n        segmentMatrix[j][0] = segment.charAt(j) - 'A'; // Assuming uppercase English letters\n      }\n\n      int[][] decryptedSegmentMatrix = multiplyMatrices(keyMatrixInverse, segmentMatrix, size);\n\n      for (int[] row : decryptedSegmentMatrix) {\n        decryptedMessage.append((char) (row[0] + 'A')); // Convert to character\n      }\n    }\n    return decryptedMessage.toString();\n  }\n}\n",c='// Function to initialize the key matrix\nfunction initializeKeyMatrix(key, size) {\n  const keyMatrix = [];\n  let index = 0;\n  for (let i = 0; i < size; i++) {\n    keyMatrix.push([]);\n    for (let j = 0; j < size; j++) {\n      keyMatrix[i].push(key.charCodeAt(index++) - 65); // Assuming uppercase English letters\n    }\n  }\n  return keyMatrix;\n}\n\n// Function to calculate the determinant of a matrix\nfunction determinant(matrix) {\n  const size = matrix.length;\n  if (size === 1) {\n    return matrix[0][0];\n  }\n  if (size === 2) {\n    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];\n  }\n\n  let det = 0;\n  for (let i = 0; i < size; i++) {\n    const minor = [];\n    for (let j = 1; j < size; j++) {\n      minor.push(matrix[j].filter((_, index) => index !== i));\n    }\n    det += Math.pow(-1, i) * matrix[0][i] * determinant(minor);\n  }\n  return det;\n}\n\n// Function to calculate the modulo inverse of a number\nfunction modInverse(a, m) {\n  a %= m;\n  for (let x = 1; x < m; x++) {\n    if ((a * x) % m === 1) {\n      return x;\n    }\n  }\n  return 1;\n}\n\n// Function to calculate the cofactor matrix of a matrix\nfunction cofactor(matrix) {\n  const size = matrix.length;\n  const cofactorMatrix = [];\n  for (let i = 0; i < size; i++) {\n    cofactorMatrix.push([]);\n    for (let j = 0; j < size; j++) {\n      const minor = [];\n      for (let x = 0; x < size; x++) {\n        for (let y = 0; y < size; y++) {\n          if (x !== i && y !== j) {\n            minor.push(matrix[x][y]);\n          }\n        }\n      }\n      cofactorMatrix[i].push(Math.pow(-1, i + j) * determinant([minor]));\n    }\n  }\n  return cofactorMatrix;\n}\n\n// Function to transpose a matrix\nfunction transpose(matrix) {\n  const size = matrix.length;\n  const transposed = [];\n  for (let i = 0; i < size; i++) {\n    transposed.push([]);\n    for (let j = 0; j < size; j++) {\n      transposed[i].push(matrix[j][i]);\n    }\n  }\n  return transposed;\n}\n\n// Function to multiply two matrices\nfunction multiplyMatrices(matrix1, matrix2) {\n  const size = matrix1.length;\n  const result = [];\n  for (let i = 0; i < size; i++) {\n    result.push([]);\n    for (let j = 0; j < size; j++) {\n      let sum = 0;\n      for (let k = 0; k < size; k++) {\n        sum += matrix1[i][k] * matrix2[k][j];\n      }\n      result[i].push(sum % 26); // Mod 26 operation for letters\n    }\n  }\n  return result;\n}\n\n// Function to encrypt a message using Hill Cipher\nfunction encrypt(message, key) {\n  const size = Math.sqrt(key.length);\n  const keyMatrix = initializeKeyMatrix(key, size);\n  const paddedMessage = message + "X".repeat(size - (message.length % size)); // Padding with \'X\'\n  let encryptedMessage = "";\n  for (let i = 0; i < paddedMessage.length; i += size) {\n    const segment = paddedMessage.substring(i, i + size);\n    const segmentMatrix = segment\n      .split("")\n      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters\n    const encryptedSegmentMatrix = multiplyMatrices(\n      [segmentMatrix],\n      keyMatrix,\n    )[0];\n    encryptedMessage += encryptedSegmentMatrix\n      .map((num) => String.fromCharCode(num + 65))\n      .join(""); // Convert back to letters\n  }\n  return encryptedMessage;\n}\n\n// Function to decrypt a message using Hill Cipher\nfunction decrypt(encryptedMessage, key) {\n  const size = Math.sqrt(key.length);\n  const keyMatrix = initializeKeyMatrix(key, size);\n  const inverseDet = modInverse(determinant(keyMatrix), 26);\n  if (inverseDet === 0) {\n    return "Key is not invertible";\n  }\n  const keyMatrixInverse = transpose(cofactor(keyMatrix)).map((row) =>\n    row.map((num) => (num * inverseDet) % 26),\n  );\n  let decryptedMessage = "";\n  for (let i = 0; i < encryptedMessage.length; i += size) {\n    const segment = encryptedMessage.substring(i, i + size);\n    const segmentMatrix = segment\n      .split("")\n      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters\n    const decryptedSegmentMatrix = multiplyMatrices(\n      [segmentMatrix],\n      keyMatrixInverse,\n    )[0];\n    decryptedMessage += decryptedSegmentMatrix\n      .map((num) => String.fromCharCode(((num + 26) % 26) + 65))\n      .join(""); // Convert back to letters\n  }\n  return decryptedMessage;\n}\n',u='import kotlin.math.pow\n\n// Function to initialize the key matrix\nfun initializeKeyMatrix(key: String, size: Int): Array<IntArray> {\n    val keyMatrix = Array(size) { IntArray(size) }\n    var index = 0\n    for (i in 0 until size) {\n        for (j in 0 until size) {\n            keyMatrix[i][j] = key[index].toInt() - 65 // Assuming uppercase English letters\n            index++\n        }\n    }\n    return keyMatrix\n}\n\n// Function to calculate the determinant of a matrix\nfun determinant(matrix: Array<IntArray>): Int {\n    val size = matrix.size\n    if (size == 1) {\n        return matrix[0][0]\n    }\n    if (size == 2) {\n        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]\n    }\n\n    var det = 0\n    for (i in 0 until size) {\n        val minor = Array(size - 1) { IntArray(size - 1) }\n        for (j in 1 until size) {\n            for (k in 0 until size) {\n                if (k < i) {\n                    minor[j - 1][k] = matrix[j][k]\n                } else if (k > i) {\n                    minor[j - 1][k - 1] = matrix[j][k]\n                }\n            }\n        }\n        det += (-1.0).pow(i) * matrix[0][i] * determinant(minor)\n    }\n    return det.toInt()\n}\n\n// Function to calculate the modulo inverse of a number\nfun modInverse(a: Int, m: Int): Int {\n    var a = a\n    a %= m\n    for (x in 1 until m) {\n        if (a * x % m == 1) {\n            return x\n        }\n    }\n    return 1\n}\n\n// Function to calculate the cofactor matrix of a matrix\nfun cofactor(matrix: Array<IntArray>): Array<IntArray> {\n    val size = matrix.size\n    val cofactorMatrix = Array(size) { IntArray(size) }\n\n    for (i in 0 until size) {\n        for (j in 0 until size) {\n            val minor = Array(size - 1) { IntArray(size - 1) }\n            for (x in 0 until size) {\n                for (y in 0 until size) {\n                    if (x != i && y != j) {\n                        val minorX = if (x < i) x else x - 1\n                        val minorY = if (y < j) y else y - 1\n                        minor[minorX][minorY] = matrix[x][y]\n                    }\n                }\n            }\n            cofactorMatrix[i][j] = (-1.0).pow(i + j) * determinant(minor)\n        }\n    }\n    return cofactorMatrix\n}\n\n// Function to transpose a matrix\nfun transpose(matrix: Array<IntArray>): Array<IntArray> {\n    val size = matrix.size\n    val transposed = Array(size) { IntArray(size) }\n\n    for (i in 0 until size) {\n        for (j in 0 until size) {\n            transposed[i][j] = matrix[j][i]\n        }\n    }\n    return transposed\n}\n\n// Function to multiply two matrices\nfun multiplyMatrices(matrix1: Array<IntArray>, matrix2: Array<IntArray>): Array<IntArray> {\n    val size = matrix1.size\n    val result = Array(size) { IntArray(size) }\n\n    for (i in 0 until size) {\n        for (j in 0 until size) {\n            for (k in 0 until size) {\n                result[i][j] += matrix1[i][k] * matrix2[k][j]\n            }\n            result[i][j] %= 26 // Mod 26 operation for letters\n        }\n    }\n    return result\n}\n\n// Function to encrypt a message using Hill Cipher\nfun encrypt(message: String, key: String): String {\n    val size = kotlin.math.sqrt(key.length.toDouble()).toInt()\n    val keyMatrix = initializeKeyMatrix(key, size)\n    val paddedMessage = message + "X".repeat(size - (message.length % size)) // Padding with \'X\'\n    var encryptedMessage = ""\n    for (i in paddedMessage.indices step size) {\n        val segment = paddedMessage.substring(i, i + size)\n        val segmentMatrix = segment.map { it.toInt() - 65 }.toIntArray() // Assuming uppercase English letters\n        val encryptedSegmentMatrix = multiplyMatrices(keyMatrix, arrayOf(segmentMatrix))\n        encryptedMessage += encryptedSegmentMatrix.flatten().joinToString("") { (it + 65).toChar().toString() } // Convert back to letters\n    }\n    return encryptedMessage\n}\n\n// Function to decrypt a message using Hill Cipher\nfun decrypt(encryptedMessage: String, key: String): String {\n    val size = kotlin.math.sqrt(key.length.toDouble()).toInt()\n    val keyMatrix = initializeKeyMatrix(key, size)\n    val inverseDet = modInverse(determinant(keyMatrix), 26)\n    if (inverseDet == 0) {\n        return "Key is not invertible"\n    }\n    val keyMatrixInverse = cofactor(keyMatrix).map { row -> row.map { (it * inverseDet) % 26 }.toIntArray() }\n    var decryptedMessage = ""\n    for (i in encryptedMessage.indices step size) {\n        val segment = encryptedMessage.substring(i, i + size)\n        val segmentMatrix = segment.map { it.toInt() - 65 }.toIntArray() // Assuming uppercase English letters\n        val decryptedSegmentMatrix = multiplyMatrices(keyMatrixInverse, arrayOf(segmentMatrix))\n        decryptedMessage += decryptedSegmentMatrix.flatten().joinToString("") { (it + 26) % 26 + 65 }.toInt().toChar().toString() // Convert back to letters\n    }\n    return decryptedMessage\n}\n',x='import numpy as np\n\n# Function to initialize the key matrix\ndef initialize_key_matrix(key, size):\n    key_matrix = np.zeros((size, size), dtype=int)\n    index = 0\n    for i in range(size):\n        for j in range(size):\n            key_matrix[i][j] = ord(key[index]) - 65  # Assuming uppercase English letters\n            index += 1\n    return key_matrix\n\n# Function to calculate the determinant of a matrix\ndef determinant(matrix):\n    return int(round(np.linalg.det(matrix)))\n\n# Function to calculate the modulo inverse of a number\ndef mod_inverse(a, m):\n    for x in range(1, m):\n        if (a * x) % m == 1:\n            return x\n    return 1\n\n# Function to calculate the cofactor matrix of a matrix\ndef cofactor(matrix):\n    return np.linalg.inv(matrix).T * determinant(matrix)\n\n# Function to encrypt a message using Hill Cipher\ndef encrypt(message, key):\n    size = int(len(key) ** 0.5)\n    key_matrix = initialize_key_matrix(key, size)\n    encrypted_message = ""\n    for i in range(0, len(message), size):\n        segment = message[i:i + size]\n        segment_matrix = np.array([[ord(char) - 65] for char in segment])  # Assuming uppercase English letters\n        encrypted_segment_matrix = np.dot(key_matrix, segment_matrix) % 26  # Mod 26 operation for letters\n        encrypted_segment = \'\'.join([chr(num[0] + 65) for num in encrypted_segment_matrix])  # Convert back to letters\n        encrypted_message += encrypted_segment\n    return encrypted_message\n\n# Function to decrypt a message using Hill Cipher\ndef decrypt(encrypted_message, key):\n    size = int(len(key) ** 0.5)\n    key_matrix = initialize_key_matrix(key, size)\n    inverse_det = mod_inverse(determinant(key_matrix), 26)\n    if inverse_det == 0:\n        return "Key is not invertible"\n    key_matrix_inverse = cofactor(key_matrix) * inverse_det % 26  # Mod 26 operation for letters\n    decrypted_message = ""\n    for i in range(0, len(encrypted_message), size):\n        segment = encrypted_message[i:i + size]\n        segment_matrix = np.array([[ord(char) - 65] for char in segment])  # Assuming uppercase English letters\n        decrypted_segment_matrix = np.dot(key_matrix_inverse, segment_matrix) % 26  # Mod 26 operation for letters\n        decrypted_segment = \'\'.join([chr(num[0] + 65) for num in decrypted_segment_matrix])  # Convert back to letters\n        decrypted_message += decrypted_segment\n    return decrypted_message\n',d='use nalgebra::{Matrix, U2, U3};\n\n// Function to initialize the key matrix\nfn initialize_key_matrix(key: &str, size: usize) -> Matrix<i32, U3, U3> {\n    let mut key_matrix = Matrix::<i32, U3, U3>::zeros();\n    let mut index = 0;\n    for i in 0..size {\n        for j in 0..size {\n            key_matrix[(i, j)] = key.chars().nth(index).unwrap() as i32 - 65; // Assuming uppercase English letters\n            index += 1;\n        }\n    }\n    key_matrix\n}\n\n// Function to calculate the determinant of a matrix\nfn determinant(matrix: &Matrix<i32, U3, U3>) -> i32 {\n    matrix.determinant()\n}\n\n// Function to calculate the modulo inverse of a number\nfn mod_inverse(a: i32, m: i32) -> i32 {\n    for x in 1..m {\n        if (a * x) % m == 1 {\n            return x;\n        }\n    }\n    1\n}\n\n// Function to calculate the cofactor matrix of a matrix\nfn cofactor(matrix: &Matrix<i32, U3, U3>) -> Matrix<i32, U3, U3> {\n    matrix.adjoint().map(|x| x * (-1 as i32).powf((x.row + x.column) as f32))\n}\n\n// Function to multiply two matrices\nfn multiply_matrices(matrix1: &Matrix<i32, U3, U3>, matrix2: &Matrix<i32, U3, U3>) -> Matrix<i32, U3, U3> {\n    matrix1 * matrix2\n}\n\n// Function to encrypt a message using Hill Cipher\nfn encrypt(message: &str, key: &str) -> String {\n    let size = (key.len() as f64).sqrt() as usize;\n    let key_matrix = initialize_key_matrix(key, size);\n    let padded_message = format!("{}{}", message, "X".repeat(size - (message.len() % size))); // Padding with \'X\'\n    let mut encrypted_message = String::new();\n    for i in (0..padded_message.len()).step_by(size) {\n        let segment = &padded_message[i..(i + size)];\n        let segment_matrix: Vec<i32> = segment.chars().map(|c| c as i32 - 65).collect(); // Assuming uppercase English letters\n        let segment_matrix = Matrix::from_row_slice(size, 1, &segment_matrix);\n        let encrypted_segment_matrix = multiply_matrices(&key_matrix, &segment_matrix);\n        for j in 0..size {\n            encrypted_message.push((encrypted_segment_matrix[(j, 0)] % 26 + 65) as u8 as char); // Convert back to letters\n        }\n    }\n    encrypted_message\n}\n\n// Function to decrypt a message using Hill Cipher\nfn decrypt(encrypted_message: &str, key: &str) -> String {\n    let size = (key.len() as f64).sqrt() as usize;\n    let key_matrix = initialize_key_matrix(key, size);\n    let inverse_det = mod_inverse(determinant(&key_matrix), 26);\n    if inverse_det == 0 {\n        return String::from("Key is not invertible");\n    }\n    let key_matrix_inverse = cofactor(&key_matrix).map(|x| (x * inverse_det) % 26); // Mod 26 operation for letters\n    let mut decrypted_message = String::new();\n    for i in (0..encrypted_message.len()).step_by(size) {\n        let segment = &encrypted_message[i..(i + size)];\n        let segment_matrix: Vec<i32> = segment.chars().map(|c| c as i32 - 65).collect(); // Assuming uppercase English letters\n        let segment_matrix = Matrix::from_row_slice(size, 1, &segment_matrix);\n        let decrypted_segment_matrix = multiply_matrices(&key_matrix_inverse, &segment_matrix);\n        for j in 0..size {\n            decrypted_message.push((((decrypted_segment_matrix[(j, 0)] + 26) % 26) + 65) as u8 as char); // Convert back to letters\n        }\n    }\n    decrypted_message\n}\n',p='// Function to initialize the key matrix\nfunction initializeKeyMatrix(key: string, size: number): number[][] {\n  const keyMatrix: number[][] = [];\n  let index = 0;\n  for (let i = 0; i < size; i++) {\n    keyMatrix.push([]);\n    for (let j = 0; j < size; j++) {\n      keyMatrix[i].push(key.charCodeAt(index++) - 65); // Assuming uppercase English letters\n    }\n  }\n  return keyMatrix;\n}\n\n// Function to calculate the determinant of a matrix\nfunction determinant(matrix: number[][]): number {\n  const size = matrix.length;\n  if (size === 1) {\n    return matrix[0][0];\n  }\n  if (size === 2) {\n    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];\n  }\n\n  let det = 0;\n  for (let i = 0; i < size; i++) {\n    const minor: number[][] = [];\n    for (let j = 1; j < size; j++) {\n      minor.push(matrix[j].filter((_, index) => index !== i));\n    }\n    det += (-1) ** i * matrix[0][i] * determinant(minor);\n  }\n  return det;\n}\n\n// Function to calculate the modulo inverse of a number\nfunction modInverse(a: number, m: number): number {\n  a %= m;\n  for (let x = 1; x < m; x++) {\n    if ((a * x) % m === 1) {\n      return x;\n    }\n  }\n  return 1;\n}\n\n// Function to calculate the cofactor matrix of a matrix\nfunction cofactor(matrix: number[][]): number[][] {\n  const size = matrix.length;\n  const cofactorMatrix: number[][] = [];\n\n  for (let i = 0; i < size; i++) {\n    cofactorMatrix.push([]);\n    for (let j = 0; j < size; j++) {\n      const minor: number[][] = [];\n      for (let x = 0; x < size; x++) {\n        for (let y = 0; y < size; y++) {\n          if (x !== i && y !== j) {\n            minor.push(matrix[x][y]);\n          }\n        }\n      }\n      cofactorMatrix[i].push((-1) ** (i + j) * determinant(minor));\n    }\n  }\n  return cofactorMatrix;\n}\n\n// Function to transpose a matrix\nfunction transpose(matrix: number[][]): number[][] {\n  const size = matrix.length;\n  const transposed: number[][] = [];\n\n  for (let i = 0; i < size; i++) {\n    transposed.push([]);\n    for (let j = 0; j < size; j++) {\n      transposed[i][j] = matrix[j][i];\n    }\n  }\n  return transposed;\n}\n\n// Function to multiply two matrices\nfunction multiplyMatrices(\n  matrix1: number[][],\n  matrix2: number[][],\n): number[][] {\n  const size = matrix1.length;\n  const result: number[][] = [];\n\n  for (let i = 0; i < size; i++) {\n    result.push([]);\n    for (let j = 0; j < size; j++) {\n      let sum = 0;\n      for (let k = 0; k < size; k++) {\n        sum += matrix1[i][k] * matrix2[k][j];\n      }\n      result[i][j] = sum % 26; // Mod 26 operation for letters\n    }\n  }\n  return result;\n}\n\n// Function to encrypt a message using Hill Cipher\nfunction encrypt(message: string, key: string): string {\n  const size = Math.sqrt(key.length);\n  const keyMatrix = initializeKeyMatrix(key, size);\n  const paddedMessage = message + "X".repeat(size - (message.length % size)); // Padding with \'X\'\n  let encryptedMessage = "";\n  for (let i = 0; i < paddedMessage.length; i += size) {\n    const segment = paddedMessage.substring(i, i + size);\n    const segmentMatrix = segment\n      .split("")\n      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters\n    const encryptedSegmentMatrix = multiplyMatrices(\n      [segmentMatrix],\n      keyMatrix,\n    )[0];\n    encryptedMessage += encryptedSegmentMatrix\n      .map((num) => String.fromCharCode(num + 65))\n      .join(""); // Convert back to letters\n  }\n  return encryptedMessage;\n}\n\n// Function to decrypt a message using Hill Cipher\nfunction decrypt(encryptedMessage: string, key: string): string {\n  const size = Math.sqrt(key.length);\n  const keyMatrix = initializeKeyMatrix(key, size);\n  const inverseDet = modInverse(determinant(keyMatrix), 26);\n  if (inverseDet === 0) {\n    return "Key is not invertible";\n  }\n  const keyMatrixInverse = cofactor(keyMatrix).map((row) =>\n    row.map((num) => (num * inverseDet) % 26),\n  );\n  let decryptedMessage = "";\n  for (let i = 0; i < encryptedMessage.length; i += size) {\n    const segment = encryptedMessage.substring(i, i + size);\n    const segmentMatrix = segment\n      .split("")\n      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters\n    const decryptedSegmentMatrix = multiplyMatrices(\n      [segmentMatrix],\n      keyMatrixInverse,\n    )[0];\n    decryptedMessage += decryptedSegmentMatrix\n      .map((num) => String.fromCharCode(((num + 26) % 26) + 65))\n      .join(""); // Convert back to letters\n  }\n  return decryptedMessage;\n}\n',g={title:"Hill Cipher",description:"Hill Cipher",hide_table_of_contents:!0},y=void 0,h={id:"education/computer-science/algorithms/algo/hill-cipher",title:"Hill Cipher",description:"Hill Cipher",source:"@site/docs/education/01-computer-science/10-algorithms/03-algo/hill-cipher.mdx",sourceDirName:"education/01-computer-science/10-algorithms/03-algo",slug:"/education/computer-science/algorithms/algo/hill-cipher",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/hill-cipher",draft:!1,unlisted:!1,editUrl:"https://github.com/EliFuzz/tech-labs/docs/education/01-computer-science/10-algorithms/03-algo/hill-cipher.mdx",tags:[],version:"current",frontMatter:{title:"Hill Cipher",description:"Hill Cipher",hide_table_of_contents:!0},sidebar:"education",previous:{title:"Heap Sort",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/heap-sort"},next:{title:"Horner's Method",permalink:"/tech-labs/docs/education/computer-science/algorithms/algo/horners-method"}},f={},z=[{value:"Definition",id:"definition",level:2},{value:"Practice",id:"practice",level:2}];function k(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,{value:"definition",label:"Definition",children:(0,i.jsx)(n.p,{children:"The Hill Cipher is a polygraphic substitution cipher based on linear algebra. It operates on blocks of plaintext letters, typically 2 or 3 at a time, and uses modular arithmetic for encryption and decryption"})}),(0,i.jsx)(a.Z,{value:"how",label:"Explanation",children:(0,i.jsx)(n.p,{children:"To begin the Hill Cipher algorithm, select a key matrix that is invertible modulo the alphabet size, typically 26 for English. Each letter in the plaintext is assigned a numerical value based on its position in the alphabet (A=0, B=1, ..., Z=25). The plaintext is then divided into blocks of the same size as the key matrix. During encryption, each plaintext block is multiplied by the key matrix modulo the alphabet size. For decryption, the block is multiplied by the inverse of the key matrix. Finally, the resulting numerical values are converted back into letters to generate the ciphertext"})}),(0,i.jsx)(a.Z,{value:"guidance",label:"Guidance",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Choose a key matrix, ensuring it is invertible modulo the alphabet size"}),"\n",(0,i.jsx)(n.li,{children:"Represent each plaintext letter by its numerical equivalent"}),"\n",(0,i.jsxs)(n.li,{children:["Break the plaintext into blocks of the same size as the key matrix","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["for each block","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"multiply the block by the key matrix modulo the alphabet size"}),"\n",(0,i.jsx)(n.li,{children:"convert the resulting numbers back to letters"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Concatenate the encrypted blocks to form the ciphertext"}),"\n"]})}),(0,i.jsx)(a.Z,{value:"tips",label:"Tips",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ensure the key matrix is invertible modulo the alphabet size to enable decryption"}),"\n",(0,i.jsx)(n.li,{children:"if the key matrix is not invertible, choose another key matrix"}),"\n",(0,i.jsx)(n.li,{children:"the size of the key matrix determines the size of the blocks of plaintext that can be encrypted or decrypted"}),"\n"]})})]}),"\n",(0,i.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,{value:"practice",label:"Practice",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'hillCipher(plaintext, keyMatrix, alphabetSize):\n  ciphertext = ""\n  for each block in plaintext:\n    numericalBlock = convertToNumerical(block)\n    encryptedBlock = multiplyMatrix(keyMatrix, numericalBlock, alphabetSize)\n    ciphertext += convertToLetters(encryptedBlock)\n  return ciphertext\n\nmultiplyMatrix(keyMatrix, block, alphabetSize):\n  result = []\n  for row in keyMatrix:\n    value = 0\n    for i in range(len(row)):\n      value += row[i] * block[i]\n    result.append(value % alphabetSize)\n  return result\n\nconvertToNumerical(block):\n  numericalBlock = []\n  for letter in block:\n    numericalBlock.append(letterToNumber(letter))\n  return numericalBlock\n\nconvertToLetters(block):\n  letters = ""\n  for num in block:\n    letters += numberToLetter(num)\n  return letters\n'})})}),(0,i.jsx)(a.Z,{value:"solution",label:"Solution",children:(0,i.jsxs)(s.Z,{queryString:"code",children:[(0,i.jsx)(a.Z,{value:"go",label:"",attributes:{title:"Go Lang",className:"code_lang go m"},children:(0,i.jsx)(o.Z,{language:"go",children:l})}),(0,i.jsx)(a.Z,{value:"java",label:"",attributes:{title:"Java",className:"code_lang java m"},children:(0,i.jsx)(o.Z,{language:"java",children:m})}),(0,i.jsx)(a.Z,{value:"js",label:"",attributes:{title:"JavaScript",className:"code_lang js m"},children:(0,i.jsx)(o.Z,{language:"js",children:c})}),(0,i.jsx)(a.Z,{value:"kotlin",label:"",attributes:{title:"Kotlin",className:"code_lang kotlin m"},children:(0,i.jsx)(o.Z,{language:"kotlin",children:u})}),(0,i.jsx)(a.Z,{value:"python",label:"",attributes:{title:"Python",className:"code_lang python m"},children:(0,i.jsx)(o.Z,{language:"python",children:x})}),(0,i.jsx)(a.Z,{value:"rust",label:"",attributes:{title:"Rust",className:"code_lang rust m"},children:(0,i.jsx)(o.Z,{language:"rust",children:d})}),(0,i.jsx)(a.Z,{value:"ts",label:"",attributes:{title:"TypeScript",className:"code_lang ts m"},children:(0,i.jsx)(o.Z,{language:"ts",children:p})})]})})]})]})}function M(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);