function groupAnagrams(words) {
    // Write your code here.
      let hash = {};
      let out = [];
      for(let i = 0; i < words.length; i++) {
          let curr = words[i].split("").sort().join("");
          if(!(curr in hash)) hash[curr] = [];
          hash[curr].push(words[i]);
      }
          
      return Object.values(hash);
  }