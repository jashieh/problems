function longestSubstringWithoutDuplication(string) {
    // Write your code here.
      let hash = {};
      let longest = [0,1];
      let startIdx = 0;
      let i = 0;
      
      while(i < string.length) {
          if(string[i] in hash) {
              startIdx = Math.max(startIdx,hash[string[i]] + 1);
          }
          
          if(longest[1] - longest[0] < i + 1 - startIdx) {
              longest = [startIdx, i+1];
          }
          
          hash[string[i]] = i;
          i++;
      }
      return string.slice(longest[0], longest[1]);
      
      
  }
  
  // Do not edit the line below.
  exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
  