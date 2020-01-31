function underscorifySubstring(string, substring) {
    // Write your code here.
      let range = [];
      let startIdx = 0;
      while(startIdx < string.length) {
          let start = string.indexOf(substring,startIdx);
          if(start === -1) {
              break;
          }
          else {
              range.push([start, start + substring.length]);
              startIdx = start + 1;
          }
      }
      
      let combined = [];
      let currStart = 0;
      let currEnd = 0;
      
      for(let i = 0; i < range.length; i++) {
          if(i === 0) {
              currStart = range[i][0];
              currEnd = range[i][1];
          }
          else if(range[i][0] <= currEnd) {
              currEnd = range[i][1];
          } else {
              combined.push([currStart, currEnd]);
              currStart = range[i][0];
              currEnd = range[i][1];
          }
          if(i === range.length - 1) {
              combined.push([currStart, currEnd]);
          }
      }
      
      let totalLength = combined.length*2 + string.length;
      let offset = 0;
      let k = 0;
      let out = "";
      
      
      for(let j = 0; j < string.length; j++) {
          if(combined[k] && j === combined[k][0]) {
              out += "_";
          }
          out += string[j];
          
          if(combined[k] && j === combined[k][1] - 1) {
              out += "_";
              k++;
          }	
          
      }
      return out;
      
      
  }
  
  // Do not edit the line below.
  exports.underscorifySubstring = underscorifySubstring;
  