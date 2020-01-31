// Time: O(n*log(n)), Space: O(1)
function largestRange(array) {
    // Write your code here.
      array.sort(function(a,b){return a-b});
      let min = array[0];
      let max = array[0];
      
      let ans = [0,min, max];
      
      for(let i = 0; i < array.length - 1; i++) {
          if(array[i+1] === array[i] + 1 || array[i+1] === array[i]) {
              max = array[i + 1];
          } else {
              min = array[i + 1];
              max = array[i + 1];
          }
          
          if(Math.abs(max-min) > ans[0]) {
              ans[0] = Math.abs(max-min);
              ans[1] = min;
              ans[2] = max;
          }
      }
      
      
      return [ans[1],ans[2]]
}

// Time: O(n), Space: O(n)
function largestRange(array) {
    // Write your code here.
      let hash = {};
      
      for(let num of array) {
          hash[num] = false;
      }
      
      let range = [0,0,0];
      
      for(let key of array) {
          if(!hash[key]) {
              hash[key] = true;
              let left = key - 1;
              let right = key + 1;
              while(left in hash) {			
                      hash[left] = true;
                      left--;
              }
              
              while(right in hash) {			
                      hash[right] = true;
                      right++;
              }
              
              let diff = Math.abs(right-left) + 1;
              if(diff > range[0]) {
                      range[0] = diff;
                      range[1] = left + 1;
                      range[2] = right - 1;
                  }
      }
      }
      
      
      return [range[1], range[2]];
      
      
      
      
      
  }
  
  // Do not edit the line below.
  exports.largestRange = largestRange;
  