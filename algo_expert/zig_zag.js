function zigzagTraverse(array) {
    // Write your code here.
      let out = [];
      let up = false;
      let row = 0;
      let col = 0;
      while(row < array.length && row >= 0 &&
                  col < array[0].length && col >= 0) {
          
              out.push(array[row][col]);
          
              if(up) {
                  if(col === array[0].length - 1) {
                      row++;
                      up = false;
                  }
                  else if(row === 0) {
                      col++;
                      up = false;
                  } else {
                      row--;
                      col++;
                  }
              } 
          else {
              if(row === array.length -1) {
                  col++;
                  up = true;
              }
              else if(col === 0) {
                      row++;
                      up = true;
              } else {
                      row++;
                      col--;
                  }
          }
          
      }
      
      return out;
      
  }
  
  // Do not edit the line below.
  exports.zigzagTraverse = zigzagTraverse;
  