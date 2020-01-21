function iterativeInOrderTraversal(tree, callback) {
    // Write your code here.
      let stack = [];
      let node = tree;	
      while(node || stack.length !== 0) {
          while(node) {
              stack.push(node);
              node = node.left;
          }
          node = stack.pop();
          callback(node);
          
          if(node) node = node.right;
      }
  }
  
  // Do not edit the line below.
  exports.iterativeInOrderTraversal = iterativeInOrderTraversal;
  