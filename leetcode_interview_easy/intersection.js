/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {};
    
    for(let num of nums1) {
        hash[num] = true;
    }
    
    let res = {};
    for(let num of nums2) {
        if(num in hash) res[num] = true;
    }
    
    return Object.keys(res);
};