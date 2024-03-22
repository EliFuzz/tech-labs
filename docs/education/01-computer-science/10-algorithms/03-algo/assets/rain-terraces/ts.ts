function bruteforceRainTerraces(terraces: number[]): number {
  let waterAmount = 0;

  for (
    let terraceIndex = 0;
    terraceIndex < terraces.length;
    terraceIndex += 1
  ) {
    let leftHighestLevel = 0;
    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }

    let rightHighestLevel = 0;
    for (
      let rightIndex = terraceIndex + 1;
      rightIndex < terraces.length;
      rightIndex += 1
    ) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      waterAmount += terraceBoundaryLevel - terraces[terraceIndex];
    }
  }

  return waterAmount;
}

function dynamicProgrammingRainTerraces(terraces: number[]): number {
  let waterAmount = 0;

  const leftMaxLevels: number[] = new Array(terraces.length).fill(0);
  const rightMaxLevels: number[] = new Array(terraces.length).fill(0);

  [leftMaxLevels[0]] = terraces;
  for (
    let terraceIndex = 1;
    terraceIndex < terraces.length;
    terraceIndex += 1
  ) {
    leftMaxLevels[terraceIndex] = Math.max(
      terraces[terraceIndex],
      leftMaxLevels[terraceIndex - 1],
    );
  }

  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
  for (
    let terraceIndex = terraces.length - 2;
    terraceIndex >= 0;
    terraceIndex -= 1
  ) {
    rightMaxLevels[terraceIndex] = Math.max(
      terraces[terraceIndex],
      rightMaxLevels[terraceIndex + 1],
    );
  }

  for (
    let terraceIndex = 0;
    terraceIndex < terraces.length;
    terraceIndex += 1
  ) {
    const currentTerraceBoundary = Math.min(
      leftMaxLevels[terraceIndex],
      rightMaxLevels[terraceIndex],
    );

    if (currentTerraceBoundary > terraces[terraceIndex]) {
      waterAmount += currentTerraceBoundary - terraces[terraceIndex];
    }
  }

  return waterAmount;
}
