pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut result = vec![];
    backtrack(&mut result, &mut vec![], &candidates, target, 0);
    result
}

fn backtrack(result: &mut Vec<Vec<i32>>, temp_list: &mut Vec<i32>, candidates: &Vec<i32>, remain: i32, start: usize) {
    if remain < 0 {
        return;
    } else if remain == 0 {
        result.push(temp_list.clone());
    } else {
        for i in start..candidates.len() {
            temp_list.push(candidates[i]);
            backtrack(result, temp_list, candidates, remain - candidates[i], i);
            temp_list.pop();
        }
    }
}
