fn counting_sort(arr: &[usize], max: usize) -> Vec<usize> {
    let mut count = vec![0; max + 1];
    let mut sorted = vec![0; arr.len()];

    for &num in arr {
        count[num] += 1;
    }

    let mut index = 0;
    for i in 0..=max {
        while count[i] > 0 {
            sorted[index] = i;
            index += 1;
            count[i] -= 1;
        }
    }

    sorted
}
