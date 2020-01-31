function smallestSubstringContaining(bigString, smallString) {
    // Write your code here.
      let hash = {};
      let smallest = bigString;
      let ans = [-1,0,0];
      
      for(let j = 0; j < smallString.length;j++) {
          if(!(smallString[j] in hash)) hash[smallString[j]] = 0;
          hash[smallString[j]]++;
      }
      
      let big = {};		
      let low = 0;
      let high = 0;
      
      let required = Object.keys(hash).length;
      let formed = 0;
      
      while(high < bigString.length) {
          let char = bigString[high];
          if(!(bigString[high] in big)) big[bigString[high]] = 0;
          big[bigString[high]]++;
          
          if(big[char] === hash[char]) {
              formed++;
          }
          
          while(low <= high && formed === required) {
              let char2 = bigString[low];
              big[char2]--;
              
              if(ans[0] === -1 || high - low + 1 < ans[0]) {
                  ans[0] = high - low + 1;
                  ans[1] = low;
                  ans[2] = high;
              }
              
              if(big[char2] < hash[char2]) {
                  formed--;
              }
              low++;
          }
          
          if(formed === required) {
              let str = bigString.slice(0,high + 1);
              if(str.length < smallest.length) smallest = str;
          }
          
          high++;
          
      }
      
      return ans[0] === -1 ? "" :bigString.slice(ans[1],ans[2] + 1);			
  }