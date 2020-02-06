/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return move(0,0,m,n);
};

function move(i,j,m,n, memo={}) {
    let key = `${i}-${j}`;
    if(key in memo) return memo[key];
    
    if(i === m - 1 && j === n - 1) return 1;
    
    let dirs = [[1,0],[0,1]];
    let count = 0;
    
    for(let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        
        if(inBounds(x,y,m,n)) {
            count += move(x,y,m,n,memo);
        }
    }
    
    memo[key] = count;
    
    return count;
}

function inBounds(i,j,m,n) {
    return i < m && j < n;
}