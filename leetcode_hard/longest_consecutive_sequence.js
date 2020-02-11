/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
       hash[nums[i]] = true;
    }
    
    let longest = 0;
    for(let key in hash) {
        let curr = 1;
        let num = parseInt(key);
        if(!(num-1 in hash)) {     
            while((num+1) in hash) {
                curr++;
                num++;
            }
        }
        
        longest = Math.max(curr,longest);
    }
    
    return longest;
};