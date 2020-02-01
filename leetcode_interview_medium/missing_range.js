/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    nums.unshift(lower-1);
    nums.push(upper+1);
    
    let out = [];
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i-1] === 2) {
            out.push(`${nums[i-1]+1}`);
        } else if(nums[i] - nums[i-1] > 2) {
            out.push(`${nums[i-1]+1}->${nums[i]-1}`);                    
        }            
    }
    return out;
    
};