/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
  let queue = [root];
    let out = [];
    
    while(queue.length) {
        let n = queue.length;
        out.push(queue[n-1].val);
        
        for(let i = 0; i < n; i++) {
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return out;
    
    
};