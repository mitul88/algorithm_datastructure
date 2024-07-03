const prices = [10, 2, 5, 1, 1];

function stockProfitCalculator(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        if (maxProfit < prices[j] - prices[i]) {
          maxProfit = prices[j] - prices[i];
        }
      }
    }
  }
  return maxProfit;
}

console.log(stockProfitCalculator(prices));

// the above algorithm has  an if statement and a variable declaration which are constant time. It has a nested loop inside of another loop hence it has big O of n^2 time complexity
