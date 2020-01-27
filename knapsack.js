function knapsackProblem(items, capacity) {
    // Write your code here.
      let table = [];
      for(let i = 0; i < items.length + 1; i++) {
          let row = new Array(capacity+1).fill(0);
          table.push(row);
      }
      
      for(let i = 1; i < table.length; i++) {
          let value = items[i-1][0];
          let weight = items[i-1][1];
          
          for(let j = 0; j < table[0].length; j++) {
              if(weight > j) {
                  table[i][j] = table[i-1][j];
              } else {
                  let take = table[i-1][j-weight] + value;
                  let skip = table[i-1][j];
                  table[i][j] = Math.max(take, skip);
              }
          }
      }
      
      let out = [];
      let i = table.length - 1;
      let j = table[0].length - 1;
      
      while(table[i][j] !== 0) {
          if(table[i][j] === table[i-1][j]) {
              i--;
          } else {
              out.unshift(i-1);
              j -= items[i-1][1];
              i--;
          }
      }
      
      return [table[table.length-1][table[0].length-1], out];
      
  }
  
  // Do not edit the line below.
  exports.knapsackProblem = knapsackProblem;
  