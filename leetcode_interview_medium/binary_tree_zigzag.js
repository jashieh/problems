/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    
    let queue = [root];
    let left = true;
    let out = [];
    
    while(queue.length) {
        let l = queue.length;
        let row = [];
        for(let i = 0; i < l; i++) {
            let node = null;
            if(!left) {
                node = queue.pop();
                if(node.right) queue.unshift(node.right);
                if(node.left) queue.unshift(node.left);                
                row.push(node.val);
            } else {
                node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                row.push(node.val);
            }
        }
        left = !left;
        
        out.push(row);
    }
    return out;
    
};