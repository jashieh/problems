/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let min = Infinity;
    let max = -Infinity;
    
    let start = 0;
    let end = -1;
    
    let l = 0; let r = nums.length - 1;
    
    while(l < nums.length) {
        nums[l] >= max ? max = nums[l] : end = l;
        nums[r] <= min ? min = nums[r] : start = r;
        
        l++;
        r--;
    }
    
    return end - start + 1;
};