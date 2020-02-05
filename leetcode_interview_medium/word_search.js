/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                if(search(board,word,0,i,j)) {
                    return true;
                }
            }
        }
    }
    
    return false;
};


function inBound(board,i,j) {
    return i >= 0 && j >= 0 && i < board.length && j < board[0].length;
}

function search(board, word, curr, i, j, visited = {}) {
    let dirs = [[1,0],[0,1],[-1,0],[0,-1]];
    let key = `${i}-${j}`;

    visited[key] = true;
    if(curr === word.length - 1 && board[i][j] === word[curr]) {
        return true;
    }
    
    for(let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        let key2 = `${x}-${y}`;
        
        if(inBound(board, x, y) && !(key2 in visited)
           && board[x][y] === word[curr + 1]) {
            if(search(board,word,curr+1,x,y,Object.assign({},visited))) {
                return true;
            }
        }
    }
    return false;
}