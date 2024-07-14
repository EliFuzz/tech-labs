use std::cmp;

fn jump_search(arr: &[i32], x: i32) -> i32 {
    let n = arr.len();
    let mut step = (n as f64).sqrt() as usize;
    let mut prev = 0;

    while arr[cmp::min(step, n) - 1] < x {
        prev = step;
        step += (n as f64).sqrt() as usize;
        if prev >= n {
            return -1;
        }
    }

    while arr[prev] < x {
        prev += 1;
        if prev == cmp::min(step, n) {
            return -1;
        }
    }

    if arr[prev] == x {
        return prev as i32;
    }

    -1
}
