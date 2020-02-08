/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return helper(root,"");
};

function helper(root,str) {
    if(!root) return str += "null,";
    
    str += root.val + ",";
    str = helper(root.left,str);
    str = helper(root.right,str);
    return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let list = data.split(",");
    return helper2(list);
};

function helper2(data) {
    if(data[0] === "null") {
        data.shift();
        return null;
    }
    
    let root = new TreeNode(data.shift());
    
    root.left = helper2(data);
    root.right = helper2(data);
    
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */