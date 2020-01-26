function shiftedBinarySearch(array, target) {
    // Write your code here.
      let low = 0;
      let high = array.length;
      
      while(low < high) {
          let mid = Math.floor((high + low)/2);
          if(target === array[mid]) return mid;
          else if(array[low] <= array[mid]) {
              if(target < array[mid] && target >= array[low]) {
                  high = mid;
              } else {
                  low = mid + 1;
              }
          } else {
              if(target > array[mid] && target <= array[high-1]) {
                  low = mid + 1;
              } else {
                  high = mid;
              }
          }
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.shiftedBinarySearch = shiftedBinarySearch;
  