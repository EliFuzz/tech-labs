package main

import (
	"math"
)

func maxProfitDC(prices []int) int {
	return maxProfitHelper(prices, 0, len(prices)-1)
}

func maxProfitHelper(prices []int, start, end int) int {
	if start >= end {
		return 0
	}

	mid := start + (end-start)/2

	leftProfit := maxProfitHelper(prices, start, mid)
	rightProfit := maxProfitHelper(prices, mid+1, end)
	crossProfit := maxCrossProfit(prices, start, mid, end)

	return max(leftProfit, max(rightProfit, crossProfit))
}

func maxCrossProfit(prices []int, start, mid, end int) int {
	leftMax := math.MinInt64
	rightMax := math.MinInt64

	leftSum := 0
	for i := mid; i >= start; i-- {
		leftSum += prices[i]
		leftMax = max(leftMax, leftSum)
	}

	rightSum := 0
	for i := mid + 1; i <= end; i++ {
		rightSum += prices[i]
		rightMax = max(rightMax, rightSum)
	}

	return leftMax + rightMax
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
