/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;
    return helper(root,p,q,ans);
};

function helper(node, p, q, ans) {
    if(!node) return 0;  
    let sum = 0;
    if(node === p || node === q) sum++;
    let left = helper(node.left,p,q,ans);
    if(isNaN(left)) return left;
    let right = helper(node.right,p,q,ans);
    if(isNaN(right)) return right;
    
    sum += (left + right);
    
    if(sum === 2 && ans === null) {
        return node;
    }
    return sum;
}