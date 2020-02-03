var inorderSuccessor = function(root, p) {        
        let stack = [];
        let inOrder = -Infinity;
        
        while(root || stack.length) {
            while(root) {
                stack.push(root);
                root = root.left;
            }
            
            root = stack.pop();
            
            if(inOrder === p.val) return root;
            
            inOrder = root.val;
            
            root = root.right;
        }
        
        return null;
        
    };