fn permutations(nums: &mut Vec<i32>) -> Vec<Vec<i32>> {
    let mut result = Vec::new();

    fn backtrack(nums: &mut Vec<i32>, start: usize, result: &mut Vec<Vec<i32>>) {
        if start == nums.len() {
            result.push(nums.clone());
            return;
        }
        for i in start..nums.len() {
            nums.swap(start, i);
            backtrack(nums, start + 1, result);
            nums.swap(start, i);
        }
    }

    backtrack(nums, 0, &mut result);
    result
}
