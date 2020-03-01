/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let one = nums.slice(0,-1);
    let two = nums.slice(1);
    
    return Math.max(helper(one), helper(two));
};

function helper(nums) {
    let i2 = 0;
    let i1 = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        let take = i >= 2 ? i2 + nums[i] : nums[i];
        let skip = i1;
        
        let curr = Math.max(take,skip);
        i1 = curr;
        i2 = skip;
        max = Math.max(curr,max);
    }
    
    return max;
}