/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return validRows(board) && validCols(board) && validSquare(board);
};

function validRows(board) {
    for(let i = 0; i < board.length; i++) {
        let hash = {};
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] !== ".") {
                if(board[i][j] in hash) return false;
                hash[board[i][j]] = true;
            }   
        }
    }
    
    return true;
}

function validCols(board) {
    for(let i = 0; i < board.length; i++) {
        let hash = {};
        for(let j = 0; j < board.length; j++) {
            if(board[j][i] !== ".") {
                if(board[j][i] in hash) return false;
                hash[board[j][i]] = true;
            }   
        }
    }
    
    return true;
}

function validSquare(board) {
    let hash = {};    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] !== ".") {
                let box_idx = Math.floor(i/3)*3 + Math.floor(j/3);
                if(!(box_idx in hash)) hash[box_idx] = {};
                if(board[i][j] in hash[box_idx]) return false;
                hash[box_idx][board[i][j]] = true;
            }
        }
        
    }
    return true;  
}