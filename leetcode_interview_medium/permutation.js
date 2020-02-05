/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1) return [nums];
    
    let last = nums.pop();
    let prev = permute(nums);
    let out = [];
    for(let i = 0; i < prev.length; i++) {
        for(let j = 0; j <= prev[0].length; j++) {
            out.push(prev[i].slice(0,j).concat([last]).concat(prev[i].slice(j)));
        }
    }
    
    return out;
};