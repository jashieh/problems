/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {    
    nums.unshift(1);
    nums.push(1);
    
    return helper(nums,0,nums.length-1);
};


function helper(nums,left, right, memo = {}) {
    if(left + 1 === right) return 0;
    let key = `${left}-${right}`;
    
    if(key in memo) return memo[key];
    
    let max = 0;
    
    for(let i = left + 1; i < right; i++) {
        max = Math.max(max, nums[left] * nums[i] * nums[right] +
            helper(nums,left,i,memo) + helper(nums,i,right,memo));
    }
    
    memo[key] = max;
    return max;
}