/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    let visited = {};
    visited[1] = 0;
    let q = [1];
    while(q.length) {
        let pos = q.shift();
        if(pos === n*n) return visited[pos];
        for(let i = 1; i <= 6 && (pos + i <= n*n); i++) {
            let temp = pos + i;
            let [row, col] = getPos(temp,n);
            let newPos = board[row][col] === -1 ? temp :
                board[row][col];
            if(!(newPos in visited)) {
                visited[newPos] = visited[pos] + 1;
                q.push(newPos);
            }
            
        }
        
    }
    
    return -1;
};

function getPos(pos, n) {
    let row = Math.floor((pos-1)/n);
    let col = (pos-1) % n;
    col = (row % 2) === 1 ? n - 1 - col: col;
    row = n - 1 - row;
    return [row,col];
}