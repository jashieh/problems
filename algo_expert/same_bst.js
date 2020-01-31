function sameBsts(arrayOne, arrayTwo) {
    // Write your code here.
      if(arrayOne.length === 0 && arrayTwo.length === 0) return true;
      if(arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) {
          return false;
      }
      
      let left1 = [];
      let left2 = [];
      
      let right1 = [];
      let right2 = [];
      
      for(let i = 1; i < arrayOne.length; i++) {
          if(arrayOne[i] < arrayOne[0]) {
              left1.push(arrayOne[i]);
          }
          else {
              right1.push(arrayOne[i]);
          }
          
          
          if(arrayTwo[i] < arrayTwo[0]) {
              left2.push(arrayTwo[i])
          }
          else {
              right2.push(arrayTwo[i]);
          }
      }
          
      let l = sameBsts(left1, left2);
      let r = sameBsts(right1, right2);
      
      return l && r;
  }
  
  function helper(left, right) {
      
  }
  
  // Do not edit the line below.
  exports.sameBsts = sameBsts;
  