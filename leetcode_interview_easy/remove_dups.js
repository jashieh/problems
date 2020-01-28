/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    while(i < nums.length - 1) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i,1);
        } else {
            i++;
        }
    }
    return nums.length;
};

// optimal 
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
    
};