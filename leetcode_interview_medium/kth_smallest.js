/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let vals = inOrder(root);
    return vals[k-1];
    
};

function inOrder(root) {
    if(!root) return [];
    
    let arr = [];
    arr = arr.concat(inOrder(root.left));
    arr.push(root.val);
    arr = arr.concat(inOrder(root.right));
    
    return arr;
}