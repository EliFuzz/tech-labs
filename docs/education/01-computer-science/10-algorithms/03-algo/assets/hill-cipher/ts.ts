// Function to initialize the key matrix
function initializeKeyMatrix(key: string, size: number): number[][] {
  const keyMatrix: number[][] = [];
  let index = 0;
  for (let i = 0; i < size; i++) {
    keyMatrix.push([]);
    for (let j = 0; j < size; j++) {
      keyMatrix[i].push(key.charCodeAt(index++) - 65); // Assuming uppercase English letters
    }
  }
  return keyMatrix;
}

// Function to calculate the determinant of a matrix
function determinant(matrix: number[][]): number {
  const size = matrix.length;
  if (size === 1) {
    return matrix[0][0];
  }
  if (size === 2) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  let det = 0;
  for (let i = 0; i < size; i++) {
    const minor: number[][] = [];
    for (let j = 1; j < size; j++) {
      minor.push(matrix[j].filter((_, index) => index !== i));
    }
    det += (-1) ** i * matrix[0][i] * determinant(minor);
  }
  return det;
}

// Function to calculate the modulo inverse of a number
function modInverse(a: number, m: number): number {
  a %= m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 1;
}

// Function to calculate the cofactor matrix of a matrix
function cofactor(matrix: number[][]): number[][] {
  const size = matrix.length;
  const cofactorMatrix: number[][] = [];

  for (let i = 0; i < size; i++) {
    cofactorMatrix.push([]);
    for (let j = 0; j < size; j++) {
      const minor: number[][] = [];
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          if (x !== i && y !== j) {
            minor.push(matrix[x][y]);
          }
        }
      }
      cofactorMatrix[i].push((-1) ** (i + j) * determinant(minor));
    }
  }
  return cofactorMatrix;
}

// Function to transpose a matrix
function transpose(matrix: number[][]): number[][] {
  const size = matrix.length;
  const transposed: number[][] = [];

  for (let i = 0; i < size; i++) {
    transposed.push([]);
    for (let j = 0; j < size; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

// Function to multiply two matrices
function multiplyMatrices(
  matrix1: number[][],
  matrix2: number[][],
): number[][] {
  const size = matrix1.length;
  const result: number[][] = [];

  for (let i = 0; i < size; i++) {
    result.push([]);
    for (let j = 0; j < size; j++) {
      let sum = 0;
      for (let k = 0; k < size; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum % 26; // Mod 26 operation for letters
    }
  }
  return result;
}

// Function to encrypt a message using Hill Cipher
function encrypt(message: string, key: string): string {
  const size = Math.sqrt(key.length);
  const keyMatrix = initializeKeyMatrix(key, size);
  const paddedMessage = message + "X".repeat(size - (message.length % size)); // Padding with 'X'
  let encryptedMessage = "";
  for (let i = 0; i < paddedMessage.length; i += size) {
    const segment = paddedMessage.substring(i, i + size);
    const segmentMatrix = segment
      .split("")
      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters
    const encryptedSegmentMatrix = multiplyMatrices(
      [segmentMatrix],
      keyMatrix,
    )[0];
    encryptedMessage += encryptedSegmentMatrix
      .map((num) => String.fromCharCode(num + 65))
      .join(""); // Convert back to letters
  }
  return encryptedMessage;
}

// Function to decrypt a message using Hill Cipher
function decrypt(encryptedMessage: string, key: string): string {
  const size = Math.sqrt(key.length);
  const keyMatrix = initializeKeyMatrix(key, size);
  const inverseDet = modInverse(determinant(keyMatrix), 26);
  if (inverseDet === 0) {
    return "Key is not invertible";
  }
  const keyMatrixInverse = cofactor(keyMatrix).map((row) =>
    row.map((num) => (num * inverseDet) % 26),
  );
  let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i += size) {
    const segment = encryptedMessage.substring(i, i + size);
    const segmentMatrix = segment
      .split("")
      .map((char) => char.charCodeAt() - 65); // Assuming uppercase English letters
    const decryptedSegmentMatrix = multiplyMatrices(
      [segmentMatrix],
      keyMatrixInverse,
    )[0];
    decryptedMessage += decryptedSegmentMatrix
      .map((num) => String.fromCharCode(((num + 26) % 26) + 65))
      .join(""); // Convert back to letters
  }
  return decryptedMessage;
}
