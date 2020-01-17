function minNumberOfJumps(array) {
    // Write your code here.
      let table = new Array(array.length).fill(0);
      table[array.length - 1] = 0;
      
      for(let i = array.length - 2; i >= 0; i--) {
          if(i + array[i] >= array.length - 1)  {
              table[i] = 1;
          }
          else {
              let min = Infinity;
              for(let j = 1; j <= array[i] && (j + i) < array.length; j++) {
                  if(table[i + j] < min) min = table[i+j] + 1;
              }
              table[i] = min;
          }
      }
      
      console.log(table);
      
      return table[0];
  }
  
  // Do not edit the line below.
  exports.minNumberOfJumps = minNumberOfJumps;
  