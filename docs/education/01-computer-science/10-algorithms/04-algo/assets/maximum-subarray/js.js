function bfMaximumSubarray(inputArray) {
  let maxSubarrayStartIndex = 0;
  let maxSubarrayLength = 0;
  let maxSubarraySum = null;

  for (let startIndex = 0; startIndex < inputArray.length; startIndex += 1) {
    let subarraySum = 0;
    for (
      let arrLength = 1;
      arrLength <= inputArray.length - startIndex;
      arrLength += 1
    ) {
      subarraySum += inputArray[startIndex + (arrLength - 1)];
      if (maxSubarraySum === null || subarraySum > maxSubarraySum) {
        maxSubarraySum = subarraySum;
        maxSubarrayStartIndex = startIndex;
        maxSubarrayLength = arrLength;
      }
    }
  }

  return inputArray.slice(
    maxSubarrayStartIndex,
    maxSubarrayStartIndex + maxSubarrayLength,
  );
}

function dcMaximumSubarraySum(inputArray) {
  function solveRecursively(elementIndex, mustPick) {
    if (elementIndex >= inputArray.length) {
      return mustPick ? 0 : -Infinity;
    }
    return Math.max(
      inputArray[elementIndex] + solveRecursively(elementIndex + 1, true),
      mustPick ? 0 : solveRecursively(elementIndex + 1, false),
    );
  }

  return solveRecursively(0, false);
}

function dpMaximumSubarray(inputArray) {
  let maxSum = -Infinity;
  let currentSum = 0;

  let maxStartIndex = 0;
  let maxEndIndex = inputArray.length - 1;
  let currentStartIndex = 0;

  inputArray.forEach((currentNumber, currentIndex) => {
    currentSum += currentNumber;

    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = currentIndex;
    }

    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  });

  return inputArray.slice(maxStartIndex, maxEndIndex + 1);
}
