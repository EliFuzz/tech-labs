public class Main {

  public int maxProfitDC(int[] prices) {
    return maxProfitHelper(prices, 0, prices.length - 1);
  }

  private int maxProfitHelper(int[] prices, int start, int end) {
    if (start >= end) {
      return 0;
    }

    int mid = start + (end - start) / 2;

    int leftProfit = maxProfitHelper(prices, start, mid);
    int rightProfit = maxProfitHelper(prices, mid + 1, end);
    int crossProfit = maxCrossProfit(prices, start, mid, end);

    return Math.max(leftProfit, Math.max(rightProfit, crossProfit));
  }

  private int maxCrossProfit(int[] prices, int start, int mid, int end) {
    int leftMax = Integer.MIN_VALUE;
    int rightMax = Integer.MIN_VALUE;

    int leftSum = 0;
    for (int i = mid; i >= start; i--) {
      leftSum += prices[i];
      leftMax = Math.max(leftMax, leftSum);
    }

    int rightSum = 0;
    for (int i = mid + 1; i <= end; i++) {
      rightSum += prices[i];
      rightMax = Math.max(rightMax, rightSum);
    }

    return leftMax + rightMax;
  }
}
