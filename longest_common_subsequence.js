function longestCommonSubsequence(str1, str2) {
    // Write your code here.
      let table = [];
      for(let i = 0; i < str2.length + 1; i++) {
          let row = new Array(str1.length + 1).fill([]);
          table.push(row);
      }
      
      for(let i = 1; i < table.length; i++) {
          for(let j = 1; j < table[0].length;j++) {
              if(str2[i-1] === str1[j-1]) {
                  table[i][j] = table[i-1][j-1].concat(str1[j-1]);
              } else {
                  table[i][j] = table[i-1][j].length > table[i][j-1].length ? table[i-1][j] : table[i][j-1];
              }
          }
      }
      return table[table.length-1][table[0].length-1];
  }
  
  // Do not edit the line below.
  exports.longestCommonSubsequence = longestCommonSubsequence;
  