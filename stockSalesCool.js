var maxProfit = function(prices) {
    let len = prices.length;
    let dp = [];
    let i;
    if(prices.length <= 1){
        return 0;
    }
    for(i = 0; i<len; i++){
        dp[i] = [];
    }
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[1][0] = Math.max(prices[1]-prices[0], 0);
    dp[1][1] = Math.max(dp[0][1], dp[0][0]-prices[1]);
    for(let i = 2;i<len;i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i]);
    }
    return dp[len-1][0];
};

console.log(maxProfit([1,2,3,0,2]));

