/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let contains = 0;
    
    for(let num of nums) {
        if(num === 1) contains++;
    }
    
    if(contains === 0) return 1;
    
    if(nums.length === 1) return 2;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= 0 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        
        if(num === nums.length) {
            nums[0] = -Math.abs(nums[0]);
        } else {
            nums[num] = -Math.abs(nums[num]);
        }
    }
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > 0) return i;
    }
    
    if(nums[0] > 0) {
        return nums.length;
    }
    
    return nums.length + 1;
};