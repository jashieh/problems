function interweavingStrings(one, two, three) {
    // Write your code here.
      if(three.length !== one.length + two.length) return false;
      return helper(one,two,three,0,0);
  }
  
  function helper(one, two, three, i, j, memo = {}) {
      let key = `${i}-${j}`;
      if(memo[key]) return memo[key];
      let k = i + j;
      if(k === three.length) return true;
      
      if(i < one.length && one[i] === three[k]) {
          memo[key] = helper(one,two,three,i+1,j, memo);
          if(memo[key]) {
              return true;		
          }
      }
          
      if(j < two.length && two[j] === three[k]) {
          memo[key] = helper(one,two,three,i,j+1, memo);
          return memo[key];
      }
      
      memo[key] = false;
      
      return false;
  }
  
  // Do not edit the line below.
  exports.interweavingStrings = interweavingStrings;
  