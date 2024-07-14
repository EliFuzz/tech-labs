function backtrackingJumpGame(numbers, startIndex = 0, currentJumps = []) {
  if (startIndex === numbers.length - 1) {
    return true;
  }

  const maxJumpLength = Math.min(
    numbers[startIndex],
    numbers.length - 1 - startIndex,
  );

  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    const nextIndex = startIndex + jumpLength;
    currentJumps.push(nextIndex);

    const isJumpSuccessful = backtrackingJumpGame(
      numbers,
      nextIndex,
      currentJumps,
    );

    if (isJumpSuccessful) {
      return true;
    }

    currentJumps.pop();
  }

  return false;
}

function dpBottomUpJumpGame(numbers) {
  const cellsGoodness = Array(numbers.length).fill(undefined);
  cellsGoodness[cellsGoodness.length - 1] = true;

  for (let cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex -= 1) {
    const maxJumpLength = Math.min(
      numbers[cellIndex],
      numbers.length - 1 - cellIndex,
    );

    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
      const nextIndex = cellIndex + jumpLength;
      if (cellsGoodness[nextIndex] === true) {
        cellsGoodness[cellIndex] = true;
        break;
      }
    }
  }

  return cellsGoodness[0] === true;
}

function dpTopDownJumpGame(
  numbers,
  startIndex = 0,
  currentJumps = [],
  cellsGoodness = [],
) {
  if (startIndex === numbers.length - 1) {
    return true;
  }

  const currentCellsGoodness = [...cellsGoodness];
  if (!currentCellsGoodness.length) {
    numbers.forEach(() => currentCellsGoodness.push(undefined));
    currentCellsGoodness[cellsGoodness.length - 1] = true;
  }

  const maxJumpLength = Math.min(
    numbers[startIndex],
    numbers.length - 1 - startIndex,
  );

  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    const nextIndex = startIndex + jumpLength;

    if (currentCellsGoodness[nextIndex] !== false) {
      currentJumps.push(nextIndex);

      const isJumpSuccessful = dpTopDownJumpGame(
        numbers,
        nextIndex,
        currentJumps,
        currentCellsGoodness,
      );

      if (isJumpSuccessful) {
        return true;
      }

      currentJumps.pop();

      currentCellsGoodness[nextIndex] = false;
    }
  }

  return false;
}

function greedyJumpGame(numbers) {
  let leftGoodPosition = numbers.length - 1;

  for (
    let numberIndex = numbers.length - 2;
    numberIndex >= 0;
    numberIndex -= 1
  ) {
    const maxCurrentJumpLength = numberIndex + numbers[numberIndex];
    if (maxCurrentJumpLength >= leftGoodPosition) {
      leftGoodPosition = numberIndex;
    }
  }

  return leftGoodPosition === 0;
}
