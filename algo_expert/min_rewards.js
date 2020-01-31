function minRewards(scores) {
    // Write your code here.
      let rewards = new Array(scores.length).fill(1);
      for(let i = 1; i < scores.length; i++) {
          if(scores[i] > scores[i-1]) rewards[i] = rewards[i-1] + 1;
      }
      
      for(let i = scores.length - 2; i >= 0; i--) {
          if(scores[i] > scores[i+1]) rewards[i] = Math.max(rewards[i], rewards[i+1] +1);
      }
      
      let sum = 0;
      rewards.forEach((num) => sum +=num);
      return sum;
      
      
  }
  
  // Do not edit the line below.
  exports.minRewards = minRewards;
  