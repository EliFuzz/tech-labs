fun maxProfitDC(prices: IntArray): Int {
    return maxProfitHelper(prices, 0, prices.size - 1)
}

fun maxProfitHelper(prices: IntArray, start: Int, end: Int): Int {
    if (start >= end) return 0

    val mid = start + (end - start) / 2

    val leftProfit = maxProfitHelper(prices, start, mid)
    val rightProfit = maxProfitHelper(prices, mid + 1, end)
    val crossProfit = maxCrossProfit(prices, start, mid, end)

    return maxOf(leftProfit, rightProfit, crossProfit)
}

fun maxCrossProfit(prices: IntArray, start: Int, mid: Int, end: Int): Int {
    var leftMax = Int.MIN_VALUE
    var rightMax = Int.MIN_VALUE

    var leftSum = 0
    for (i in mid downTo start) {
        leftSum += prices[i]
        leftMax = maxOf(leftMax, leftSum)
    }

    var rightSum = 0
    for (i in mid + 1..end) {
        rightSum += prices[i]
        rightMax = maxOf(rightMax, rightSum)
    }

    return leftMax + rightMax
}
