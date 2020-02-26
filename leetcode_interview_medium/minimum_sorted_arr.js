/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length; 
    
    while(l < r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid-1] > nums[mid]) return nums[mid];
        console.log(l,r)
        if(nums[mid] > nums[r-1]) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    
    return nums[l];
};