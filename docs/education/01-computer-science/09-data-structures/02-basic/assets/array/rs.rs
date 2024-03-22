fn access_element(arr: &[i32], index: usize) -> i32 {
    arr[index]
}

fn update_element(arr: &mut [i32], index: usize, value: i32) {
    arr[index] = value;
}

fn find_length(arr: &[i32]) -> usize {
    arr.len()
}

fn iterate_elements(arr: &[i32]) {
    for &element in arr {
        println!("{}", element);
    }
}

fn append_element(arr: &mut Vec<i32>, value: i32) {
    arr.push(value);
}

fn insert_element(arr: &mut Vec<i32>, index: usize, value: i32) {
    arr.insert(index, value);
}

fn delete_element(arr: &mut Vec<i32>, index: usize) {
    arr.remove(index);
}

fn remove_element(arr: &mut Vec<i32>, value: i32) {
    if let Some(index) = arr.iter().position(|&x| x == value) {
        arr.remove(index);
    }
}

fn pop_element(arr: &mut Vec<i32>, index: usize) -> (i32, Vec<i32>) {
    let value = arr.remove(index);
    (value, arr)
}

fn search_element(arr: &[i32], value: i32) -> bool {
    arr.contains(&value)
}

fn index_of_element(arr: &[i32], value: i32) -> Option<usize> {
    arr.iter().position(|&x| x == value)
}

fn sort_array(arr: &mut [i32]) {
    arr.sort();
}

fn reverse_array(arr: &mut [i32]) {
    arr.reverse();
}

fn copy_array(arr: &[i32]) -> Vec<i32> {
    arr.to_vec()
}

fn slice_array(arr: &[i32], start: usize, stop: usize) -> Vec<i32> {
    arr[start..stop].to_vec()
}

fn concatenate_arrays(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    let mut result = arr1.to_vec();
    result.extend_from_slice(arr2);
    result
}
