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