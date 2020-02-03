/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    
    let queue = [root];
    
    while(queue.length) {
        let l = queue.length;
        for(let i = 0; i < l; i++) {
            let node = queue.shift();
            if(i === l - 1) {
                node.next = null;
            } else {
                node.next = queue[0];
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return root;
};

// Solution 2