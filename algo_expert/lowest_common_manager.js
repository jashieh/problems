function getLowestCommonManager(topManager, reportOne, reportTwo) {
    // Write your code here.
      return helper(topManager, reportOne, reportTwo);
  }
  
  function helper(node, reportOne, reportTwo) {
      if(!node) return 0;
      
      let sum = 0;
      for(let i = 0; i < node.directReports.length; i++) {
          let temp = helper(node.directReports[i], reportOne, reportTwo);	
          
          if(!isNaN(temp) ) {
              sum += temp;
          } else {
              return temp;
          }
      }
      
      if(node === reportOne || node === reportTwo) sum++;
      
      if(sum === 2) return node;
      
      return sum;
  }
  
  // Do not edit the line below.
  exports.getLowestCommonManager = getLowestCommonManager;
  