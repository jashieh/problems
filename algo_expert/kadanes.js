function kadanesAlgorithm(array) {
    // Write your code here.
      let max = array[0];
      let curr = 0;
      
      for(let i = 0; i < array.length;i++) {
          curr += array[i];
          if(curr > max) max = curr;		
          if(curr < 0) curr = 0;
      }
      
      return max;
  }