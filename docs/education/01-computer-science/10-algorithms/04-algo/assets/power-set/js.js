function backtrackingPowerSetRecursive(
  originalSet,
  allSubsets = [[]],
  currentSubSet = [],
  startAt = 0,
) {
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

function bitwisePowerSet(originalSet) {
  const subSets = [];
  const numberOfCombinations = 2 ** originalSet.length;

  for (
    let combinationIndex = 0;
    combinationIndex < numberOfCombinations;
    combinationIndex += 1
  ) {
    const subSet = [];

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

function cascadingPowerSet(originalSet) {
  const sets = [[]];

  for (let numIdx = 0; numIdx < originalSet.length; numIdx += 1) {
    const existingSetsNum = sets.length;

    for (let setIdx = 0; setIdx < existingSetsNum; setIdx += 1) {
      const set = [...sets[setIdx], originalSet[numIdx]];
      sets.push(set);
    }
  }

  return sets;
}
