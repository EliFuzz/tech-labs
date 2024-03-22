function combinationSum(candidates, target) {
  let result = [];
  backtrack(result, [], candidates, target, 0);
  return result;
}

function backtrack(result, tempList, candidates, remain, start) {
  if (remain < 0) {

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
