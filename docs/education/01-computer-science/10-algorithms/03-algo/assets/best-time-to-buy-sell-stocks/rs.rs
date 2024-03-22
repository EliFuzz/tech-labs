fn max_profit_one_pass(prices: Vec<i32>) -> i32 {
    if prices.is_empty() {
        return 0;
    }

    let mut max_profit = 0;
    let mut min_price = prices[0];

    for price in prices {
        min_price = min_price.min(price);
        max_profit = max_profit.max(price - min_price);
    }

    max_profit
}
