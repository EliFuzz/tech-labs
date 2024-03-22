def permutations(nums):
    result = []

    def backtrack(temp):
        if len(temp) == len(nums):
            result.append(temp[:])
            return
        for num in nums:
            if num not in temp:
                temp.append(num)
                backtrack(temp)
                temp.pop()

    backtrack([])
    return result
