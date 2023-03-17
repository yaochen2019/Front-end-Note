var maxProfit = function(prices) {
    var ret = 0
    for (var i = 0; i < prices.length; i++) {
        var tmp = prices[i+1] - prices[i]
        if (tmp > 0) {
            ret += tmp
        }
    }
    return ret
};
