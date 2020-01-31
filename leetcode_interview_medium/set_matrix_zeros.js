/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeros = findZeros(matrix);
    for(let idx of zeros) {
        flip(matrix, idx[0], idx[1]);
    }
};

function findZeros(matrix) {
    let out = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) out.push([i,j]);    
        }
    }
    return out;
}

function flip(matrix, i, j) {
    let dirs = [[1,0],[0,1], [-1,0], [0,-1]];
    
    for(let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        while(inBound(matrix,x,y)) {
            matrix[x][y] = 0;
            x += dir[0];
            y += dir[1];
        }
    }
}

function inBound(matrix,m,n) {
    return m >= 0 && m < matrix.length && n >= 0 && n < matrix[0].length;
}