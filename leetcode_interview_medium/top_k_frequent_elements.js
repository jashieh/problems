/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(!(num in hash)) hash[num] = [num, 0];
        hash[num][1]++;
    }
    
    let vals = Object.values(hash);
    
    vals.sort((a,b) => b[1] - a[1]);
    let ans = [];
    
    for(let i = 0; i < k; i++) {
        ans.push(vals[i][0]);
    }
    return ans;
    
    
};