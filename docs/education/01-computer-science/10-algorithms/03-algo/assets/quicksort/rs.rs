fn quicksort(arr: &mut [i32]) {
    if arr.len() <= 1 {
        return;
    }

    let pivot = arr[0];
    let (mut left, mut right): (Vec<_>, Vec<_>) = arr[1..]
        .iter()
        .partition(|&x| x <= &pivot);

    quicksort(&mut left);
    quicksort(&mut right);

    arr.copy_from_slice(&[left, vec![pivot], right].concat());
}
