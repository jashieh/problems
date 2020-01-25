// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let length = 0;
      let node = head;
      
      while(node) {
          length++;
          node = node.next;
      }
      
      let idx = length - k;
      let curr = head;
      let prev = null;
      
      for(let i = 0; i < idx; i++) {
          prev = curr;
          curr = curr.next;
      }
      
      if(curr === head) {		
          head.value = head.next.value;
          head.next = head.next.next;
          return head;
      } else {
          removeNode(curr, prev);
          return head;
      }
  
  }
  
  function removeNode(node, prev) {
      prev.next = node.next;
  } 
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  