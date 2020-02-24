/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    dfs(root);
    return root;
};

function dfs(node) {
    if(!node) return;
    flip(node);
    dfs(node.left);
    dfs(node.right);
}


function flip(node) {
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
}