use nalgebra::{Matrix, U2, U3};

// Function to initialize the key matrix
fn initialize_key_matrix(key: &str, size: usize) -> Matrix<i32, U3, U3> {
    let mut key_matrix = Matrix::<i32, U3, U3>::zeros();
    let mut index = 0;
    for i in 0..size {
        for j in 0..size {
            key_matrix[(i, j)] = key.chars().nth(index).unwrap() as i32 - 65; // Assuming uppercase English letters
            index += 1;
        }
    }
    key_matrix
}

// Function to calculate the determinant of a matrix
fn determinant(matrix: &Matrix<i32, U3, U3>) -> i32 {
    matrix.determinant()
}

// Function to calculate the modulo inverse of a number
fn mod_inverse(a: i32, m: i32) -> i32 {
    for x in 1..m {
        if (a * x) % m == 1 {
            return x;
        }
    }
    1
}

// Function to calculate the cofactor matrix of a matrix
fn cofactor(matrix: &Matrix<i32, U3, U3>) -> Matrix<i32, U3, U3> {
    matrix.adjoint().map(|x| x * (-1 as i32).powf((x.row + x.column) as f32))
}

// Function to multiply two matrices
fn multiply_matrices(matrix1: &Matrix<i32, U3, U3>, matrix2: &Matrix<i32, U3, U3>) -> Matrix<i32, U3, U3> {
    matrix1 * matrix2
}

// Function to encrypt a message using Hill Cipher
fn encrypt(message: &str, key: &str) -> String {
    let size = (key.len() as f64).sqrt() as usize;
    let key_matrix = initialize_key_matrix(key, size);
    let padded_message = format!("{}{}", message, "X".repeat(size - (message.len() % size))); // Padding with 'X'
    let mut encrypted_message = String::new();
    for i in (0..padded_message.len()).step_by(size) {
        let segment = &padded_message[i..(i + size)];
        let segment_matrix: Vec<i32> = segment.chars().map(|c| c as i32 - 65).collect(); // Assuming uppercase English letters
        let segment_matrix = Matrix::from_row_slice(size, 1, &segment_matrix);
        let encrypted_segment_matrix = multiply_matrices(&key_matrix, &segment_matrix);
        for j in 0..size {
            encrypted_message.push((encrypted_segment_matrix[(j, 0)] % 26 + 65) as u8 as char); // Convert back to letters
        }
    }
    encrypted_message
}

// Function to decrypt a message using Hill Cipher
fn decrypt(encrypted_message: &str, key: &str) -> String {
    let size = (key.len() as f64).sqrt() as usize;
    let key_matrix = initialize_key_matrix(key, size);
    let inverse_det = mod_inverse(determinant(&key_matrix), 26);
    if inverse_det == 0 {
        return String::from("Key is not invertible");
    }
    let key_matrix_inverse = cofactor(&key_matrix).map(|x| (x * inverse_det) % 26); // Mod 26 operation for letters
    let mut decrypted_message = String::new();
    for i in (0..encrypted_message.len()).step_by(size) {
        let segment = &encrypted_message[i..(i + size)];
        let segment_matrix: Vec<i32> = segment.chars().map(|c| c as i32 - 65).collect(); // Assuming uppercase English letters
        let segment_matrix = Matrix::from_row_slice(size, 1, &segment_matrix);
        let decrypted_segment_matrix = multiply_matrices(&key_matrix_inverse, &segment_matrix);
        for j in 0..size {
            decrypted_message.push((((decrypted_segment_matrix[(j, 0)] + 26) % 26) + 65) as u8 as char); // Convert back to letters
        }
    }
    decrypted_message
}
