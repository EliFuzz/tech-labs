fn bucket_sort(arr: &mut [f64]) {
    if arr.len() <= 1 {
        return;
    }

    let n = arr.len();
    let mut buckets: Vec<Vec<f64>> = vec![vec![]; n];

    for &v in arr.iter() {
        let index = (v * n as f64) as usize;
        buckets[index].push(v);
    }

    for bucket in buckets.iter_mut() {
        bucket.sort_by(|a, b| a.partial_cmp(b).unwrap());
    }

    let mut k = 0;
    for bucket in buckets.iter() {
        for &v in bucket.iter() {
            arr[k] = v;
            k += 1;
        }
    }
}
