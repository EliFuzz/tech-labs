package main

func permutations(nums []int) [][]int {
	var result [][]int
	var backtrack func(start int)
	backtrack = func(start int) {
		if start == len(nums) {
			temp := make([]int, len(nums))
			copy(temp, nums)
			result = append(result, temp)
			return
		}
		for i := start; i < len(nums); i++ {
			nums[i], nums[start] = nums[start], nums[i]
			backtrack(start + 1)
			nums[i], nums[start] = nums[start], nums[i]
		}
	}
	backtrack(0)
	return result
}
