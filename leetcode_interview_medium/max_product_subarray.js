/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {    
    let max = nums[0];
    
    let low = 0; let high = 0;
    for(let i = 0; i < nums.length; i++) {
        low = (low === 0 ? 1 : low)*nums[i];
        high = (high === 0 ? 1 : high)*nums[nums.length - 1 - i];
        max = Math.max(max, low, high);
    }
    return max;
};