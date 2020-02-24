/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let hash = {};  
    
    for(let num of nums) {
        hash[num] = true;
    }
    
    let out = [];
    
    for(let i = 1; i <= nums.length; i++) {
        if(!(i in hash)) out.push(i);
    }
    return out;
};

//
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let num of nums) {
        let idx = Math.abs(num)-1;
        if(nums[idx] > 0) nums[idx] *= -1;
    }
        
    let res = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) res.push(i+1);
    }
    return res;
};