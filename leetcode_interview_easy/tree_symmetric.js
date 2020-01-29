var isSymmetric = function(root) {
    //     let queue = [root, root];
        
    //     while(queue.length) {
    //         let node1 = queue.shift();
    //         let node2 = queue.shift();
            
    //         if(!node1 && !node2) continue;
    //         if(!node1 || !node2) return false;
    //         if(node1.val !== node2.val) return false;
            
    //         queue.push(node1.left);
    //         queue.push(node2.right);
    //         queue.push(node1.right);        
    //         queue.push(node2.left);
    //     }
        
    //     return true;
        
        return isMirror(root,root);
        
    };
    
    function isMirror(node1, node2) {
        if(!node1 && !node2) return true;
        if(!node1 || !node2) return false;
        
        
        return node1.val === node2.val &&
            isMirror(node1.left, node2.right) &&
            isMirror(node1.right, node2.left);
    }