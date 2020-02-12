/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    return Math.max(...helper(root));
};

function helper(node) {
    if(!node.left && !node.right) return [node.val,node.val];
    
    let left = node.left ? helper(node.left) : [0,node.val];
    let right = node.right ? helper(node.right) : [0, node.val];
    
    let branch = Math.max(left[0],right[0]);
    let branchSum = Math.max(branch + node.val, node.val);
    let vertex = Math.max(branchSum,left[1], right[1], left[0] + right[0] + node.val);
    return [branchSum, vertex];
    
}