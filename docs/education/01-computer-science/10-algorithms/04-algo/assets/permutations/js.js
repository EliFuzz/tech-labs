function permutations(nums) {
  const result = [];

  function backtrack(temp) {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }
    for (let num of nums) {
      if (!temp.includes(num)) {
        temp.push(num);
        backtrack(temp);
        temp.pop();
      }
    }
  }

  backtrack([]);
  return result;
}
