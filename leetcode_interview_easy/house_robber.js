/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //     if(nums.length === 0) return 0;
    //     let table = new Array(nums.length).fill(0);
    //     table[0] = nums[0];
        
    //     for(let i = 1; i < nums.length; i++) {
    //         let skip = Math.max(nums[i], table[i-1]);
    //         let take = i > 1 ? table[i-2] + nums[i] : 0;
    //         table[i] = Math.max(skip,take);
    //     }    
        
    //     return table[table.length -1];
        
        if(!nums.length) return 0;
        let prev = nums[0];
        let prev2 = 0;
        let max = nums[0];
        
        for(let i = 1; i < nums.length; i++) {
            let skip = Math.max(prev, nums[i]);
            let take = prev2 + nums[i];
            
            let curr = Math.max(skip, take);
            
            max = Math.max(max, curr);
            prev2 = prev;
            prev = curr;
        }
        
        return max;
    };