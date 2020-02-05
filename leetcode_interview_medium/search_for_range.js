/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = find(nums,target,true);
    
    if(nums[low] !== target) {
        return [-1,-1];
    }
    
    let high = find(nums,target,false) - 1;
    
    return [low, high];
};

function find(nums,target, low) {
    let l = 0;
    let h = nums.length;
    
    while(l < h) {
        let mid = Math.floor((l+h)/2);
        if(target < nums[mid] || (nums[mid] === target && low)) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    
    return l;
}