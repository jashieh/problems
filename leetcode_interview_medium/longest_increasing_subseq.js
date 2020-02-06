/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0) return 0;
    
    let table = new Array(nums.length).fill(1);
    
    let longest = 1;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                table[i] = Math.max(table[i], table[j] + 1);
                if(table[i] > longest) longest = table[i];
            }
        }
    }
    
    return longest;
    
};