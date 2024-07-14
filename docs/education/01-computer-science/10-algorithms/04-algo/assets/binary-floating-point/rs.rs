use std::mem;

fn float_as_binary_string(float_number: f64, byte_length: usize) -> String {
    let mut number_as_binary_string = String::new();
    let mut bytes = [0; 8];

    match byte_length {
        4 => {
            let float_as_bytes = float_number.to_le_bytes();
            bytes[..4].clone_from_slice(&float_as_bytes);
        },
        8 => bytes = float_number.to_le_bytes(),
        _ => panic!("Unsupported byte length"),
    }

    for byte in bytes.iter() {
        number_as_binary_string.push_str(&format!("{:08b}", byte));
    }

    number_as_binary_string
}
