function reverseLinkedList(head) {
    // Write your code here.
      let node = head;
      let prev = null;
      
      while(node) {
          let next = node.next;
          node.next = prev;
          prev = node;
          node = next;			
      }
      
      return prev;
  }
  
  // Do not edit the line below.
  exports.reverseLinkedList = reverseLinkedList;
  