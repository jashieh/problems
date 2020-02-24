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

//
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
    let memo = {};
    memo[0] = 1;
    return subPath(root,0,sum,memo);
    
};

function subPath(root, sum, target, memo) {
    if(!root) return 0;
    sum += root.val;

    let count = sum - target in memo ? memo[sum-target] : 0;
    
    memo[sum] = sum in memo ? memo[sum] + 1 : 1;
    
    let res = count + subPath(root.left, sum, target, memo) + subPath(root.right,sum,target,memo);
    
    memo[sum] = memo[sum] - 1;
    return res;
}