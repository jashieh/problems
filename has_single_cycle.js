function hasSingleCycle(array) {
    // Write your code here.
      let i = 0;
      let count = 0;
      while(count < array.length) {		
          if(count > 0 && i === 0) return false;
          i =  (i + array[i]) % array.length;
          if(i < 0) {
              i = i + array.length;
          }
          
          count++;
      }
          
      return i === 0;
      
  }
  
  // Do not edit the line below.
  exports.hasSingleCycle = hasSingleCycle;
  