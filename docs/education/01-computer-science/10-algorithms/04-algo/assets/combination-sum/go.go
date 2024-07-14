func combinationSum(candidates []int, target int) [][]int {
    var res [][]int
    backtrack(&res, []int{}, candidates, target, 0)
    return res
}

func backtrack(res *[][]int, temp []int, candidates []int, remain int, start int) {
    if remain < 0 {
        return
    } else if remain == 0 {
        c := make([]int, len(temp))
        copy(c, temp)
        *res = append(*res, c)
        return
    } else {
        for i := start; i < len(candidates); i++ {
            temp = append(temp, candidates[i])
            backtrack(res, temp, candidates, remain-candidates[i], i)
            temp = temp[:len(temp)-1]
        }
    }
}
