function levenshteinDistance(str1, str2) {
    // Write your code here.
      let table = [];
      // let table = new Array(str2.length + 1).fill().map(() => new Array(str1.length + 1).fill(0));
      for(let i = 0; i < str2.length + 1; i++) {
          let row = [];
          for(let j = 0; j < str1.length + 1; j++) {
              row.push(j);
          }
          row[0] = i;
          table.push(row);
      }
      
      for(let i = 1; i < table.length; i++) {
          for(let j = 1; j < table[0].length;j++) {
              if(str2[i-1] === str1[j-1]) table[i][j] = table[i-1][j-1];	
              else {
                  table[i][j] = 1 + Math.min(table[i-1][j], table[i][j-1], table[i-1][j-1]);
              }
          }
      }
      console.log(table);
      return table[table.length-1][table[0].length-1];
      
  }
  
  // Do not edit the line below.
  exports.levenshteinDistance = levenshteinDistance;
  