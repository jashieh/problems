function searchInSortedMatrix(matrix, target) {
    // Write your code here.
      let i = 0;
      let j = matrix[0].length - 1;
      
      while(i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length) {
          if(matrix[i][j] === target) return [i,j];
          
          if(matrix[i][j] < target) {
              i++;
          }
          else if(matrix[i][j] > target) {
              j--;
          } 
      }
      
      return[-1,-1];
      
      
  }
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  