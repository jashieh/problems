/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = new Array(nums.length);
    let right = new Array(nums.length);
    
    
    left[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i-1];
    }
    
    right[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }
    
    let ans = new Array(nums.length);
    
    for(let i = 0; i < nums.length; i++) {
        ans[i] = left[i] * right[i];
    }
    
    return ans;
};

//
var productExceptSelf = function(nums) {
    let ans = new Array(nums.length);
    
    
    ans[0] = 1;
    for(let i = 1; i < nums.length; i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }
    
    let r = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * r;
        r *= nums[i];
    }
        
    return ans;
};