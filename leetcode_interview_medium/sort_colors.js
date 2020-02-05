/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let low = 0;
    let high = nums.length - 1;
    
    let curr = 0;
    let temp = 0;
    
    while(curr <= high) {
        if(nums[curr] === 2) {
            temp = nums[curr];
            nums[curr] = nums[high];
            nums[high] = temp;
            high--;
        }
        else if(nums[curr] === 0) {
            temp = nums[curr];
            nums[curr] = nums[low];
            nums[low] = temp;
            low++;
            curr++;
        }
        else {
            curr++
        } 
    }
};