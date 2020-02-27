/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(matrix.length === 0) return [];
    let p = [];
    let a = [];
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        let rowP = new Array(n);
        let rowA = new Array(n);
        
        for(let j = 0; j < n;j++) {
            rowP[j] = false;
            rowA[j] = false;
        }
        p.push(rowP);
        a.push(rowA);
    }
    
    let res = [];
    for(let i = 0; i < m; i++) {
        dfs(matrix,i,0,p,a,res,p,-Infinity);
        dfs(matrix,i,n-1,p,a,res,a,-Infinity);
    }
    
    for(let j = 0; j < n;j++) {
        dfs(matrix,0,j,p,a,res,p, -Infinity);
        dfs(matrix,m-1,j,p,a,res,a, -Infinity);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n;j++) {
            if(p[i][j] && a[i][j]) {
                res.push([i,j]);
            }
        }
    }
    
    return res;
    
    

};

dirs = [[1,0],[0,1],[-1,0],[0,-1]];
function dfs(matrix, i, j, p, a, res, visited,h) {
    if(!inBound(matrix,i,j) || visited[i][j] || matrix[i][j] < h) return;
    visited[i][j] = true;
    
    for(let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        
        dfs(matrix,x,y,p,a,res,visited,matrix[i][j]);
    }
    
    return;
}

function inBound(matrix,i,j) {
    return i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length;
}