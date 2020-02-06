/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let prev = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        if(i + nums[i] >= prev) prev = i;
    }
    
    return prev === 0;
    
};