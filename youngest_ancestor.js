class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
      let d1 = 0;
      let d2 = 0
      
      let node1 = descendantOne;
      let node2 = descendantTwo;
      
      while(node1 != topAncestor) {
          node1 = node1.ancestor;
          d1++;
      }
      
      while(node2 != topAncestor) {
          node2 = node2.ancestor;
          d2++
      }
      
      node1 = descendantOne;
      node2 = descendantTwo;
      
      while(d2 > d1) {
          node2 = node2.ancestor
          d2--;
      }
      
      while(d1 > d2) {
          node1 = node1.ancestor
          d1--;
      }
      
      while(node1 != topAncestor) {
          if(node1 === node2) return node1;
          node1 = node1.ancenstor;
          node2 = node2.ancenstor;
      }
      
          
      return topAncestor;
  }
  
  // Do not edit the line below.
  exports.AncestralTree = AncestralTree;
  exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
  