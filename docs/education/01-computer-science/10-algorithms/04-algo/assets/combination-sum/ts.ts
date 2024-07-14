function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  backtrack(result, [], candidates, target, 0);
  return result;
}

function backtrack(
  result: number[][],
  tempList: number[],
  candidates: number[],
  remain: number,
  start: number,
) {
  if (remain < 0) {
    return;
  } else if (remain === 0) {
    result.push([...tempList]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      tempList.push(candidates[i]);
      backtrack(result, tempList, candidates, remain - candidates[i], i);
      tempList.pop();
    }
  }
}
