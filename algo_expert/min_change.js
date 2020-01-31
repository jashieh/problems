function minNumberOfCoinsForChange(n, denoms, memo = {}) {
    // Write your code here.
      if(n in memo) return memo[n];
      if(n === 0) return 0;
      if(n < 0) return -1;
      
      let min = Infinity;
      for(let i = denoms.length - 1; i >=0; i--) {
              let x = minNumberOfCoinsForChange(n-denoms[i],denoms, memo);
              if(x >= 0 && x < min) {
                  min = x + 1;
              }
      }
      memo[n] = min === Infinity ? -1 : min;
      return memo[n];
  }
  
  // Do not edit the line below.
  exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
  