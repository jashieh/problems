/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let hash = {};
    // for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] in hash) {
    //         delete hash[nums[i]]
    //     }
    //     else {
    //         hash[nums[i]] = true;        
    //     }
    // }
    // return Object.keys(hash)[0];  
    
    let a = 0;
    for(let i = 0; i < nums.length; i++) {
        a ^= nums[i];
    }
    return a;
};