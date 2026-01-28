const fibonacci = function(n) {
    if (n < 0) return 'OOPS'
    
    dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};

// Do not edit below this line
module.exports = fibonacci;
