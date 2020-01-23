function numberOfBinaryTreeTopologies(n, memo = {}) {
    // Write your code here.
      if(n === 0) return 1;
      if(n in memo) return memo[n];
      
      let numTrees = 0;
      
      for(let i = 0; i < n; i++) {
          let rightSize = n - 1 - i;
          let left = numberOfBinaryTreeTopologies(i, memo);
          let right = numberOfBinaryTreeTopologies(rightSize, memo);
          numTrees += left*right;
      }
      memo[n] = numTrees;
      return memo[n];
      
  }
  
  // Do not edit the line below.
  exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
  