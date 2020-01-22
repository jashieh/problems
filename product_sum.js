function productSum(array) {
    // Write your code here.
      return helper(array,1);
  }
  
  function helper(array,depth) {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
          if(array[i] instanceof Array) {
              sum += helper(array[i], depth + 1);
          } else {
              sum += array[i];
          }
      }
      return depth*sum;
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;
  