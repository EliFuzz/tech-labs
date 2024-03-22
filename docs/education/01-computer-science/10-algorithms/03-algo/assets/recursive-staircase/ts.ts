function recursiveStaircaseBruteforce(stairsNum: number): number {
  if (stairsNum <= 0) {
    return 0;
  }

  if (stairsNum === 1 || stairsNum === 2) {
    return stairsNum;
  }

  return (
    recursiveStaircaseBruteforce(stairsNum - 1) +
    recursiveStaircaseBruteforce(stairsNum - 2)
  );
}

function recursiveStaircaseIterative(stairsNum: number): number {
  if (stairsNum <= 0) {
    return 0;
  }

  const steps: number[] = [1, 2];

  if (stairsNum <= 2) {
    return steps[stairsNum - 1];
  }

  for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
    [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
  }

  return steps[1];
}

function recursiveStaircaseDynamicProgramming(stairsNum: number): number {
  if (stairsNum < 0) {
    return 0;
  }

  const steps: number[] = new Array(stairsNum + 1).fill(0);

  steps[0] = 0;
  steps[1] = 1;
  steps[2] = 2;

  if (stairsNum <= 2) {
    return steps[stairsNum];
  }

  for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
    steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2];
  }

  return steps[stairsNum];
}

function recursiveStaircaseMemoization(totalStairs: number): number {
  const memo: number[] = [];

  const getSteps = (stairsNum: number): number => {
    if (stairsNum <= 0) {
      return 0;
    }

    if (stairsNum === 1 || stairsNum === 2) {
      return stairsNum;
    }

    if (memo[stairsNum]) {
      return memo[stairsNum];
    }

    memo[stairsNum] = getSteps(stairsNum - 1) + getSteps(stairsNum - 2);

    return memo[stairsNum];
  };

  return getSteps(totalStairs);
}
