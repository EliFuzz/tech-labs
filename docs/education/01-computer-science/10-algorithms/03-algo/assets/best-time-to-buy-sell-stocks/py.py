def maxProfitOnePass(prices):
    if not prices:
        return 0

    max_profit = 0
    min_price = prices[0]

    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)

    return max_profit
