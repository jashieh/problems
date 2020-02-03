/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {    
    if(preorder.length === 0) return null;
    
    let rootIdx = inorder.indexOf(preorder[0]);
    
    let leftIn = inorder.slice(0,rootIdx);
    let rightIn = inorder.slice(rootIdx + 1);
    
    let leftPre = preorder.slice(1, rootIdx + 1);
    let rightPre = preorder.slice(rootIdx + 1);
    
    
    let root = new TreeNode(preorder[0]);
    
    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);
    
    return root;  
};