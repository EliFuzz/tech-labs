fn cartesian_product(arrays: &[Vec<&str>]) -> Vec<Vec<&str>> {
    let mut result = vec![vec![]];
    for array in arrays {
        let mut temp = vec![];
        for item in array {
            for res in &result {
                let mut t = res.clone();
                t.push(item);
                temp.push(t);
            }
        }
        result = temp;
    }
    result
}
