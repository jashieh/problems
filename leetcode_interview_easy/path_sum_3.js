/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0;
    
    return subPath(root,sum) + pathSum(root.left, sum) + pathSum(root.right,sum);
};

function subPath(root, sum) {
    if(!root) return 0;
    let count = 0;
    
    if(root.val === sum) count++;
    count += subPath(root.left, sum - root.val);
    count += subPath(root.right, sum - root.val);
    
    return count;
}