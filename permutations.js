function getPermutations(array) {
    // Write your code here.
      if(array.length === 0) return [];
      if(array.length === 1) return [array];
      
      let permutations = [];
      let last = array.pop();
      let sub = getPermutations(array);
      
      for(let i = 0; i < sub.length;i++) {
          for(let j = 0; j <= sub[i].length; j++) {
              permutations.push(sub[i].slice(0,j).concat([last]).concat(sub[i].slice(j)));
          }
      }
      
      
      return permutations;
      
  }
  
  // Do not edit the line below.
  exports.getPermutations = getPermutations;
  