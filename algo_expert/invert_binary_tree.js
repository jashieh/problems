function invertBinaryTree(tree) {
    // Write your code here.
      if(!tree) return;
      let left = tree.left;
      let right = tree.right;
      invertBinaryTree(left);
      invertBinaryTree(right);
      
      tree.left = right;
      tree.right = left;
      
      return tree;
  }