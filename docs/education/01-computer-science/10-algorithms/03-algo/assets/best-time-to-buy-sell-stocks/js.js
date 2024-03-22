function maxProfitDC(prices) {
  return maxProfitHelper(prices, 0, prices.length - 1);
}

function maxProfitHelper(prices, start, end) {
  if (start >= end) {
    return 0;
  }

  const mid = Math.floor((start + end) / 2);

  const leftProfit = maxProfitHelper(prices, start, mid);
  const rightProfit = maxProfitHelper(prices, mid + 1, end);
  const crossProfit = maxCrossProfit(prices, start, mid, end);

  return Math.max(leftProfit, rightProfit, crossProfit);
}

function maxCrossProfit(prices, start, mid, end) {
  let leftMax = -Infinity;
  let rightMax = -Infinity;

  let leftSum = 0;
  for (let i = mid; i >= start; i--) {
    leftSum += prices[i];
    leftMax = Math.max(leftMax, leftSum);
  }

  let rightSum = 0;
  for (let i = mid + 1; i <= end; i++) {
    rightSum += prices[i];
    rightMax = Math.max(rightMax, rightSum);
  }

  return leftMax + rightMax;
}
