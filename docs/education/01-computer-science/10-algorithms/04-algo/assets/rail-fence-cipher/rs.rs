use std::collections::HashMap;

const DIRECTIONS: HashMap<&str, i32> = [("UP", -1), ("DOWN", 1)]
    .iter()
    .cloned()
    .collect();

fn build_fence(rows_num: usize) -> Vec<Vec<char>> {
    vec![vec![' '; 0]; rows_num]
}

fn get_next_direction(rail_count: usize, current_rail: usize, direction: i32) -> i32 {
    if current_rail == 0 {
        *DIRECTIONS.get("DOWN").unwrap()
    } else if current_rail == rail_count - 1 {
        *DIRECTIONS.get("UP").unwrap()
    } else {
        direction
    }
}

fn fill_encode_fence(mut fence: Vec<Vec<char>>, string: &str, rail_count: usize) -> Vec<Vec<char>> {
    let mut current_rail = 0;
    let mut direction = *DIRECTIONS.get("DOWN").unwrap();

    for c in string.chars() {
        fence[current_rail].push(c);
        direction = get_next_direction(rail_count, current_rail, direction);
        current_rail = (current_rail as i32 + direction) as usize;
    }

    fence
}

fn fill_decode_fence(mut fence: Vec<Vec<char>>, string: &str, rail_count: usize) -> Vec<Vec<char>> {
    let mut current_rail = 0;
    let mut current_column = 0;
    let mut direction = *DIRECTIONS.get("DOWN").unwrap();

    for c in string.chars() {
        fence[current_rail][current_column] = c;
        direction = get_next_direction(rail_count, current_rail, direction);
        current_rail = (current_rail as i32 + direction) as usize;
        current_column = (current_column + 1) % string.len();
    }

    fence
}

fn decode_fence(fence: Vec<Vec<char>>, rail_count: usize) -> String {
    let mut decoded_message = Vec::new();

    let mut current_rail = 0;
    let mut direction = *DIRECTIONS.get("DOWN").unwrap();

    for _ in 0..rail_count {
        decoded_message.extend_from_slice(&fence[current_rail]);
        direction = get_next_direction(rail_count, current_rail, direction);
        current_rail = (current_rail as i32 + direction) as usize;
    }

    decoded_message.into_iter().collect()
}

pub fn encode_rail_fence_cipher(string: &str, rail_count: usize) -> String {
    let fence = build_fence(rail_count);
    let fence = fill_encode_fence(fence, string, rail_count);
    fence.into_iter().flatten().collect()
}

pub fn decode_rail_fence_cipher(string: &str, rail_count: usize) -> String {
    let fence = build_fence(rail_count);
    let fence = fill_decode_fence(fence, string, rail_count);
    decode_fence(fence, rail_count)
}
