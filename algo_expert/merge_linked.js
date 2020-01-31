// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
      let head = headOne.value <= headTwo.value ? headOne : headTwo;
      let node = head;
      
      let node1 = head === headOne ? headOne.next : headOne;
      let node2 = head === headTwo ? headTwo.next : headTwo;
      
      while(node1 && node2) {
          if(node1.value <= node2.value) {
              node.next = node1;
              node1 = node1.next;
              node = node.next;
          } else {
              node.next = node2;
              node2 = node2.next;
              node = node.next;
          }
      }
      
      if(!node1) node.next = node2;
      if(!node2) node.next = node1;
      
          
      return head;
  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  