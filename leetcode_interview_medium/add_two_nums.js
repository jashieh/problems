/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    
    let carry = 0;
    let node = head;
    while(l1 || l2) {
        let sum = 0;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum += carry;
        carry = 0;
        if(sum >= 10) {
            carry = 1;
            sum = sum % 10;
        }
        
        node.next = new ListNode(sum);
        node = node.next;
    }
    
    if(carry > 0) {
        node.next = new ListNode(carry);
    }
    
    return head.next;
 
};