fun combinationSum(candidates: IntArray, target: Int): List<List<Int>> {
    val result = mutableListOf<List<Int>>()
    backtrack(result, mutableListOf(), candidates, target, 0)
    return result
}

fun backtrack(result: MutableList<List<Int>>, tempList: MutableList<Int>, candidates: IntArray, remain: Int, start: Int) {
    if (remain < 0) {
        return
    } else if (remain == 0) {
        result.add(ArrayList(tempList))
    } else {
        for (i in start until candidates.size) {
            tempList.add(candidates[i])
            backtrack(result, tempList, candidates, remain - candidates[i], i)
            tempList.removeAt(tempList.size - 1)
        }
    }
}
