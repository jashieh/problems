function searchForRange(array, target) {
    // Write your code here.
      let out = [-1,-1];
      let left = bsearch(array, target, true);
      
      if(array[left] !== target) {
          return out;
      }
      
      out[0] = left;
      out[1] = bsearch(array, target, false) - 1;
      return out;
  }
  
  function bsearch(array, target, left) {
      let low = 0;
      let high = array.length;
      
      while(low < high) {
          let mid = Math.floor((low + high) / 2);
          
          if(target < array[mid] || (array[mid] === target && left)) {
              high = mid;
          } else {
              low = mid + 1;
          }
      }
      return low;
  }
  
  // Do not edit the line below.
  exports.searchForRange = searchForRange;
  