fn insertion_sort(arr: &mut [i32]) {
    let n = arr.len();
    for i in 1..n {
        let mut j = i;
        while j > 0 && arr[j - 1] > arr[j] {
            arr.swap(j, j - 1);
            j -= 1;
        }
    }
}
