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
var inorderTraversal = function(root) {
    
    let stack = [];
    let node = root;
    let out = [];
    
    while(node || stack.length) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        
        node = stack.pop();
        out.push(node.val);
        node = node.right;
    }
    
    return out;
};