function waterArea(heights) {
    // Write your code here.
      let sum = 0;
      
      let left = [];
      let right = [];
      let tallest = 0;
      
      for(let i = 0; i < heights.length; i++) {
          left[i] = tallest;
          if(heights[i] > tallest) tallest = heights[i];
      }
      
      tallest = 0;
      
      for(let i = heights.length-1; i >= 0; i--) {
          right[i] = tallest;
          if(heights[i] > tallest) tallest = heights[i];
      }
          
      for(let i = 0; i < heights.length; i++) {
          let add = Math.min(left[i],right[i]) - heights[i] < 0 ? 0 : Math.min(left[i],right[i]) - heights[i];
          sum += add;
      }
      return sum;
  }
  
  // Do not edit the line below.
  exports.waterArea = waterArea;
  