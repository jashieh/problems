/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let out = [];
    for(let i = 0; i < numRows; i++) {
        let row = [];
        for(let j = 0; j < i + 1; j++) {
            if(j === 0 || j === i) {
                row.push(1);
            } else {
                let num = out[i-1][j-1] + out[i-1][j];
                row.push(num);
            }
        }
        out.push(row);
    }
    
    return out;
    
};