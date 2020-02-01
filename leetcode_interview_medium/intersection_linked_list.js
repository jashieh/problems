/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let node1 = headA;
    let l1 = 0;
    while(node1) {
        node1 = node1.next;
        l1++;
    }
    
    let node2 = headB;
    let l2 = 0;
    while(node2) {
        node2 = node2.next;
        l2++;
    }
    
    let longer = l1 > l2 ? headA : headB;
    let shorter = l1 > l2 ? headB : headA;
    let diff = Math.abs(l1 - l2);
        
    while(diff > 0) {
        longer = longer.next;
        diff--;
    }
    
    while(longer && shorter) {
        if(longer === shorter) {
            return longer;
        }
        
        longer = longer.next;
        shorter = shorter.next;
    }
    
    return null;
    
    
};