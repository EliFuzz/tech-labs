fun permutations(nums: IntArray): List<List<Int>> {
    val result = mutableListOf<List<Int>>()
    fun backtrack(temp: MutableList<Int>) {
        if (temp.size == nums.size) {
            result.add(temp.toList())
            return
        }
        for (num in nums) {
            if (!temp.contains(num)) {
                temp.add(num)
                backtrack(temp)
                temp.removeAt(temp.size - 1)
            }
        }
    }
    backtrack(mutableListOf())
    return result
}
