/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length;
    
    
    while(low < high) {
        let mid = Math.floor((high+low)/2);
        if(target === nums[mid]) return mid;
        else if(nums[low] < nums[mid]) {
            if(target >= nums[low] && target < nums[mid]) high = mid;
            else low = mid + 1;
        }
        else {
            if(target <= nums[high-1] && target > nums[mid]) low = mid + 1;
            else high = mid;
        }      
}
    
    return -1;
    
};