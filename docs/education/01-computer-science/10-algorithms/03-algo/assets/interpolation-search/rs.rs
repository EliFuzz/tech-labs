fn interpolation_search(arr: &[i32], x: i32) -> Option<usize> {
    let mut low = 0;
    let mut high = arr.len() - 1;

    while low <= high && x >= arr[low] && x <= arr[high] {
        if low == high {
            return if arr[low] == x { Some(low) } else { None };
        }

        let pos = low + ((x - arr[low]) * (high - low) as i32 / (arr[high] - arr[low])) as usize;

        if arr[pos] == x {
            return Some(pos);
        }

        if arr[pos] < x {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    None
}
