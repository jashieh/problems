function moveElementToEnd(array, toMove) {
    // Write your code here.
      let front = 0;
      for(let i = 0; i < array.length; i++) {
          if(array[i] !== toMove) {
              [array[front], array[i]] = [array[i], array[front]];
              front++;
          }	
      }
      
      return array;
  }
  
  
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  