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
var diameterOfBinaryTree = function(root) {
    let sol = new Solution();
    sol.helper(root);
    return sol.ans-1;
};

class Solution {
    constructor() {
        this.ans = 1;
    }
    
    helper(node) {
        if(!node) return 0;
        let left = this.helper(node.left);
        let right = this.helper(node.right);
        this.ans = Math.max(this.ans, left + right + 1);
        return Math.max(left, right) + 1;
    }
}

