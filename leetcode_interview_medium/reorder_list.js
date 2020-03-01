/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return null;
    let center = null;
    let p1 = head;
    let p2 = head;
    
    // find center;
    while(p2 && p2.next) {
        center = p1;
        p1 = p1.next;
        p2 = p2.next.next;
    }
    
    center.next = null;
    
    // Reverse later half of list
    let l2 = reverse(p1);
        
    
    // Join sorted lists
    merge(head,l2);
};

function reverse(head) {
    let prev = null;
    let curr = head;
    
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function merge(l1,l2) {
    while(l1) {
        let n1 = l1.next;
        let n2 = l2.next;
        l1.next = l2;
        
        if(!n1) break;
        l2.next = n1;
        l1 = n1;
        l2 = n2;
    }   
}