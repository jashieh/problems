function maxProfitWithKTransactions(prices, k) {
    // Write your code here.
      if(prices.length === 0) return 0;
      
      let table = [];
      
      for(let i = 0; i < k+1; i++) {
          let row = new Array(prices.length).fill(0);
          table.push(row);
      }
      
      for(let i = 1; i < table.length; i++) {
          let currMax = -Infinity;
          for(let j = 1; j < table[0].length; j++) {
              currMax = Math.max(currMax, table[i-1][j-1] - prices[j-1]);
              console.log(currMax);
              table[i][j] = Math.max(table[i][j-1], currMax + prices[j]);
          }
      }
      return table[table.length-1][table[0].length -1];
  }
  
  // Do not edit the line below.
  exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
  