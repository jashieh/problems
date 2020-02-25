/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target, memo = {}) {    
    let next = candidates.slice(0,-1);
    let last = candidates[candidates.length-1];
    let res = [];
    for(let i = 0; i*last <= target; i++) {
        if(i*last === target) {
            let arr = [];
            for(let j = 0; j < i; j++) {
                arr.push(last);
            }
            res.push(arr);
        } else {
            let temp = combinationSum(next, target-i*last);
            for(let k = 0; k < temp.length; k++) {
                for(let j = 0; j < i; j++) {
                    temp[k].push(last);                
                }  
                res.push(temp[k]);
            }
        }
    }
    
    return res;
      
};