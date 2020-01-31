function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
      if(array.length === 0) return 0;
      if(array.length === 1) return array[0];
      
      let first = Math.max(array[0], array[1]);
      let second = array[0];
      
      for(let i = 2; i < array.length; i++) {
              let current = Math.max(first, second + array[i]);
              second = first;
              first = current;
      }
          
      return first;
  }