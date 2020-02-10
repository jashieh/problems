/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    
    let hash = {};
    hash[0] = 1;
    
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let compliment = sum - k;
        if(compliment in hash) {
            count += hash[compliment];
        }
        
        if(!(sum in hash)) hash[sum] = 0;
        hash[sum]++;
    }
    return count;
};