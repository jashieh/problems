function selectionSort(array) {
    // Write your code here.	
      for(let i = 0; i < array.length; i++) {
          let smallest = i;
          for(let j = i + 1; j < array.length; j++) {
              if(array[j] < array[smallest]) smallest = j;
          }
          
          [array[i], array[smallest]] = [array[smallest], array[i]];
      }
      
      return array;
      
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  