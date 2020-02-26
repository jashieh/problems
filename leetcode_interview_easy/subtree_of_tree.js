/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s) return false;
    return helper(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function helper(s,t) {
    if(!s && !t) return true;
    if(!s || !t) return false;
    if(s.val !== t.val) return false;
    return helper(s.left,t.left) && helper(s.right,t.right);
}