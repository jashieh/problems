function longestStringChain(strings) {
    // Write your code here.
      strings.sort((a,b) => b.length - a.length);
      let chains = {};
      for(let i = 0; i < strings.length; i++) {
          chains[strings[i]] = [];
          for(let j = 0; j < strings[i].length; j++) {
              let sub = strings[i].slice(0,j) + strings[i].slice(j+1);
              if(strings.includes(sub)) chains[strings[i]].push(sub);
          }
      }
          
      let maxIdx = -1;
      let maxLength = 1;
      let memo = {};
      for(let i = 0; i < strings.length; i++) {
          let temp = getDepth(strings[i], chains, memo);
          if(temp['depth'] > maxLength) {
              maxLength = temp['depth'];
              maxIdx = i;
          }
      }
      
      if(maxIdx === -1) return []; 
      
      // console.log(memo);
      let out = [];
      let str = strings[maxIdx];
      
      while(str) {		
          out.push(str);
          str = memo[str].string;
      }
      
      return out;
  }
  
  function getDepth(string, chains, memo) {
      if(string in memo) return memo[string];
      if(chains[string].length === 0) {
          memo[string] = {'string': null, 'depth': 1};
          return memo[string];
      }
      
      let depth = {'string': string, 'depth': 0};
      let curr = chains[string];
      
      for(let i = 0; i < curr.length; i++) {
          let temp = getDepth(curr[i], chains, memo);
          if(temp['depth'] + 1 > depth['depth']) {
              depth['depth'] = temp['depth'] + 1;
              depth['string'] = curr[i];
          }
      }
      memo[string] = depth;
      return memo[string];
  }
  
  
  // Do not edit the line below.
  exports.longestStringChain = longestStringChain;
  