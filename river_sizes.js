function riverSizes(matrix) {
    // Write your code here.
      let sizes = [];
      let visited = {};
      for(let i = 0; i < matrix.length; i++) {
          for(let j = 0; j < matrix[0].length; j++) {
              let key = `${i}-${j}`;
              if(matrix[i][j] === 1 && !(key in visited)) {
                  sizes.push(getSize(matrix,i,j, visited));
              }	
          }
      }
      return sizes;
  }
  
  function getSize(matrix, i, j, visited) {
      let count = 0;
      let key = `${i}-${j}`;
      if(key in visited) return 0;
      visited[key] = true;
      
      if(i+1 < matrix.length && matrix[i+1][j] === 1) {
          count += getSize(matrix,i+1, j,visited);
      }
      if(j+1 < matrix[0].length && matrix[i][j+1] === 1) {
          count += getSize(matrix,i, j+1,visited);
      }
      if(i-1 >= 0 && matrix[i-1][j] === 1) {
          count += getSize(matrix,i-1, j,visited);
      }
      if(j-1 >= 0 && matrix[i][j-1] === 1) {
          count += getSize(matrix,i, j-1, visited);
      }
      
      return count + 1;
  }
  
  // Do not edit the line below.
  exports.riverSizes = riverSizes;
  