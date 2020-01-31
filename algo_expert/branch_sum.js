// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      if(!root) return [];
      if(!root.left && !root.right) return [root.value];
      let left = branchSums(root.left);
      let right = branchSums(root.right);
      
      for(let i = 0; i < left.length; i++) {
          left[i] += root.value;
      }
      for(let j = 0; j < right.length;j++) {
          right[j] += root.value;
      }
      
      return left.concat(right);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  