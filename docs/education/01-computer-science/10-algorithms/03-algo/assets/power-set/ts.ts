function backtrackingPowerSetRecursive(
  originalSet: number[],
  allSubsets: number[][] = [[]],
  currentSubSet: number[] = [],
  startAt: number = 0,
): number[][] {
  for (let position = startAt; position < originalSet.length; position += 1) {
    currentSubSet.push(originalSet[position]);
    allSubsets.push([...currentSubSet]);

    backtrackingPowerSetRecursive(
      originalSet,
      allSubsets,
      currentSubSet,
      position + 1,
    );

    currentSubSet.pop();
  }

  return allSubsets;
}

function bitwisePowerSet(originalSet: number[]): number[][] {
  const subSets: number[][] = [];
  const numberOfCombinations = 2 ** originalSet.length;

  for (
    let combinationIndex = 0;
    combinationIndex < numberOfCombinations;
    combinationIndex += 1
  ) {
    const subSet: number[] = [];

    for (
      let setElementIndex = 0;
      setElementIndex < originalSet.length;
      setElementIndex += 1
    ) {
      if (combinationIndex & (1 << setElementIndex)) {
        subSet.push(originalSet[setElementIndex]);
      }
    }

    subSets.push(subSet);
  }

  return subSets;
}

function cascadingPowerSet(originalSet: number[]): number[][] {
  const sets: number[][] = [[]];

  for (let numIdx = 0; numIdx < originalSet.length; numIdx += 1) {
    const existingSetsNum = sets.length;

    for (let setIdx = 0; setIdx < existingSetsNum; setIdx += 1) {
      const set = [...sets[setIdx], originalSet[numIdx]];
      sets.push(set);
    }
  }

  return sets;
}
