/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let ans = new Solution(head);
    let size = ans.findSize(head);
    return ans.convert(0,size-1);
};

class Solution {
    constructor(head) {
        this.head = head;
    }
    
    findSize(node) {
        let size = 0;
        let curr = node;
        while(curr) {
            curr = curr.next;
            size++;
        }
        return size;
    }
    
    convert(low,high) {
        if(low > high) return null;

        let mid = Math.floor((low + high)/2);

        let left = this.convert(low, mid-1);
        let node = new TreeNode(this.head.val);
        node.left = left;
        this.head = this.head.next;
        
        node.right = this.convert(mid+1, high);
        return node;
    }
}