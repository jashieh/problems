/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let visited = {};
    let count = 0;
    for(let i = 0; i < M.length; i++) {
        if(!(i in visited)) {
            count++;
            dfs(M,i,visited);
        }
    }
    return count;
    
};

function dfs(M,j,visited) {
    for(let i = 0; i < M[j].length; i++) {
        if(!(i in visited) && M[j][i] === 1) {
            visited[i] = true;
            dfs(M,i,visited);
        }
    }
}