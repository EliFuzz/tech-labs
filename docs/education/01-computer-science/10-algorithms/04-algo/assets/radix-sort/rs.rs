fn get_max(arr: &Vec<u32>) -> u32 {
    let mut max = arr[0];
    for &val in arr.iter() {
        if val > max {
            max = val;
        }
    }
    max
}

fn count_sort(arr: &mut Vec<u32>, exp: u32) {
    let n = arr.len();
    let mut output = vec![0; n];
    let mut count = vec![0; 10];

    for &val in arr.iter() {
        count[((val / exp) % 10) as usize] += 1;
    }

    for i in 1..10 {
        count[i] += count[i - 1];
    }

    for &val in arr.iter().rev() {
        let index = ((val / exp) % 10) as usize;
        output[count[index] as usize - 1] = val;
        count[index] -= 1;
    }

    arr.copy_from_slice(&output);
}

fn radix_sort(arr: &mut Vec<u32>) {
    let max = get_max(arr);
    let mut exp = 1;
    while max / exp > 0 {
        count_sort(arr, exp);
        exp *= 10;
    }
}
