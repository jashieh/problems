function maxSumIncreasingSubsequence(array) {
    // Write your code here.
      let table = array.slice();
      let subs = new Array(array.length).fill(-1);
      
      let maxIdx = 0;
      
      for(let i = 0; i < array.length; i++) {
          for(let j = 0; j < i; j++) {
              if(array[j] < array[i] && table[j] + array[i] >= table[i]) {
                  table[i] = table[j] + array[i];
                  subs[i] = j;
              }
          }
          if(table[i] >= table[maxIdx]) maxIdx = i;
      }
      let seq = [];
      let idx = maxIdx;
      while(idx !== -1) {
          seq.unshift(array[idx]);
          idx = subs[idx];
      }
      
      return [table[maxIdx],seq];
      
      
  }
  
  // Do not edit the line below.
  exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;
  