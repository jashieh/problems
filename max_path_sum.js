function maxPathSum(tree) {
    // Write your code here.	
      let sum = helper(tree);
      
      return Math.max(...sum);
  }
  
  function helper(tree) {
      if(!tree) return [0,0];
      
      let left = helper(tree.left);
      let right = helper(tree.right);
      
      let branch = Math.max(left[0],right[0]);
      let branchSum = Math.max(branch + tree.value, tree.value);
      let triangle = Math.max(branchSum, left[0] + tree.value + right[0]);
      let running = Math.max(left[1], right[1], triangle);
      
      return [branchSum, running];
  }
  
  // Do not edit the line below.
  exports.maxPathSum = maxPathSum;
  