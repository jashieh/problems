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
    let ans = new Solution();
    dfs(root,p,q,ans);
    return ans.ans;
};


function dfs(node, p,q, ans) {
    if(!node) return 0;
    let count = 0;
    if(node.val === p.val || node.val === q.val) count++;
    
    count += dfs(node.left, p, q, ans);
    count += dfs(node.right, p, q, ans);
    if(count === 2 && ans.ans === null) ans.ans = node;
    return count;
}

class Solution {
    constructor() {
        this.ans = null;
    }
}