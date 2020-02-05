/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length === 0) return [[]];
    
    let last = nums.pop();
    let prev = subsets(nums);
    let l = prev.length;
    
    for(let i = 0; i < l; i++) {
        prev.push(prev[i].concat([last]));
    }
    
    return prev;
};