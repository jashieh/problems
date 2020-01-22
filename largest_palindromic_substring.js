function longestPalindromicSubstring(string) {
    // Write your code here.
      let sub = "";
      
      for(let i = 0; i < string.length; i++) {
          let t1 = expandCenter(string,i,i);
          let t2 = expandCenter(string,i,i+1);
          let max = Math.max(t1,t2);
          if(max > sub.length) {
              sub = string.slice(i-Math.floor((max-1)/2),i + Math.floor(max/2) + 1);
          }
          
      }
      
      return sub;
      
  }
  
  function expandCenter(string,low,high) {
          while(low >= 0 && high < string.length && string[low] === string[high]) {
              low--;
              high++;
          }
      return high - low - 1;
  }
  
  // Do not edit the line below.
  exports.longestPalindromicSubstring = longestPalindromicSubstring;
  