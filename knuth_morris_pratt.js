function knuthMorrisPrattAlgorithm(string, substring) {
    // Write your code here.
      let pattern = buildPattern(substring);
      return checkString(string, substring, pattern);
  }
  
  function buildPattern(substring) {
      let pattern = new Array(substring.length).fill(-1);
      
      let j = 0;
      let i = 1;
      
      while(i < substring.length) {
          if(substring[i] === substring[j]) {
              pattern[i] = j;
              i++;
              j++;
          } else if (j > 0) {
              j = pattern[j-1] + 1;
          } else {
              i++;
          }
      }
      
      return pattern;
  }
  
  function checkString(string, substring, pattern) {
      let i = 0;
      let j = 0;
      
      while(i < string.length && j < substring.length) {
          
          if(string[i] === substring[j]) {
              if(j === substring.length -1) return true;
              
              i++;
              j++;
          } else if (j > 0) {
              j = pattern[j-1] + 1;
          } else {
              i++;
          }
      }
      return false;
  }
  
  // Do not edit the line below.
  exports.knuthMorrisPrattAlgorithm = knuthMorrisPrattAlgorithm;
  