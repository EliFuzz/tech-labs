import numpy as np

# Function to initialize the key matrix
def initialize_key_matrix(key, size):
    key_matrix = np.zeros((size, size), dtype=int)
    index = 0
    for i in range(size):
        for j in range(size):
            key_matrix[i][j] = ord(key[index]) - 65  # Assuming uppercase English letters
            index += 1
    return key_matrix

# Function to calculate the determinant of a matrix
def determinant(matrix):
    return int(round(np.linalg.det(matrix)))

# Function to calculate the modulo inverse of a number
def mod_inverse(a, m):
    for x in range(1, m):
        if (a * x) % m == 1:
            return x
    return 1

# Function to calculate the cofactor matrix of a matrix
def cofactor(matrix):
    return np.linalg.inv(matrix).T * determinant(matrix)

# Function to encrypt a message using Hill Cipher
def encrypt(message, key):
    size = int(len(key) ** 0.5)
    key_matrix = initialize_key_matrix(key, size)
    encrypted_message = ""
    for i in range(0, len(message), size):
        segment = message[i:i + size]
        segment_matrix = np.array([[ord(char) - 65] for char in segment])  # Assuming uppercase English letters
        encrypted_segment_matrix = np.dot(key_matrix, segment_matrix) % 26  # Mod 26 operation for letters
        encrypted_segment = ''.join([chr(num[0] + 65) for num in encrypted_segment_matrix])  # Convert back to letters
        encrypted_message += encrypted_segment
    return encrypted_message

# Function to decrypt a message using Hill Cipher
def decrypt(encrypted_message, key):
    size = int(len(key) ** 0.5)
    key_matrix = initialize_key_matrix(key, size)
    inverse_det = mod_inverse(determinant(key_matrix), 26)
    if inverse_det == 0:
        return "Key is not invertible"
    key_matrix_inverse = cofactor(key_matrix) * inverse_det % 26  # Mod 26 operation for letters
    decrypted_message = ""
    for i in range(0, len(encrypted_message), size):
        segment = encrypted_message[i:i + size]
        segment_matrix = np.array([[ord(char) - 65] for char in segment])  # Assuming uppercase English letters
        decrypted_segment_matrix = np.dot(key_matrix_inverse, segment_matrix) % 26  # Mod 26 operation for letters
        decrypted_segment = ''.join([chr(num[0] + 65) for num in decrypted_segment_matrix])  # Convert back to letters
        decrypted_message += decrypted_segment
    return decrypted_message
