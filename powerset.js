function powerset(array) {
    // Write your code here.
      if(array.length === 0) return [[]];
      
      let last = array.pop();
      let set = powerset(array);
      let l = set.length;
      
      for(let i = 0; i < l; i++) {
          set.push((set[i].concat([last])));
      }
      
      return set;
  }
  
  // Do not edit the line below.
  exports.powerset = powerset;
  