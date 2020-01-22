function diskStacking(disks) {
    // Write your code here.
      disks.sort((a,b)=> a[2]-b[2]);
      let heights = disks.map(disk => disk[2]);
      let sequence = new Array(disks.length);
      
      let maxIdx = 0;
      
      for(let i = 1; i < disks.length;i++) {
          let curr = disks[i];
          for(let j = 0; j < i; j++) {
              let other = disks[j];
              if(valid(other,curr)) {
                  if(heights[i] <= curr[2] + heights[j]) {
                      heights[i] = curr[2] + heights[j];
                      sequence[i] = j;
                  }
              }
              
          }
          if(heights[i] >= heights[maxIdx]) maxIdx = i;
      }
      
      let ans = [];
      let idx = maxIdx;
      while(idx !== undefined) {
          ans.unshift(disks[idx]);
          idx = sequence[idx];
      }
      
      return ans;
      
          
  }
  
  function valid(small, big) {
      return small[0] < big[0] && small[1] < big[1] && small[2] < big[2];	
  }
  
  // Do not edit the line below.
  exports.diskStacking = diskStacking;
  