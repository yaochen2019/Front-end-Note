//时间复杂度O(n) 空间复杂度O(n)，dp数组第二维是常数
const maxProfit = function (prices) {
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    dp[0][0] = 0; //第0天不持有
    dp[0][1] = -prices[0]; //第0天持有
    for (let i = 1; i < n; i++) {
        //当前天数未持有股票，有两种情况
        //1.昨天买入，今天卖出！未持有股票
        //2.昨天没操作，今天也没操作！未持有股票
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        //当前天数持有股票
        //1.昨天买入！持有股票
        //2.今天买入！持有股票
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[n - 1][0];
};

