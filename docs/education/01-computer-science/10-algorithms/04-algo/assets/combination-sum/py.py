def combinationSum(candidates, target):
    result = []
    backtrack(result, [], candidates, target, 0)
    return result

def backtrack(result, tempList, candidates, remain, start):
    if remain < 0:
        return
    elif remain == 0:
        result.append(list(tempList))
    else:
        for i in range(start, len(candidates)):
            tempList.append(candidates[i])
            backtrack(result, tempList, candidates, remain - candidates[i], i)
            tempList.pop()
