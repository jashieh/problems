/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let total = matrix.length * matrix[0].length;
    
    let i = 0; let j = 0;
    let visited = 0;
    
    let path = [];
    let dir = "right";
    // top, right, bot, left;
    let bounds = [1,matrix[0].length - 1, matrix.length - 1, 0];
    while(visited < total) {
        
        if(dir === "right") {
            if(j === bounds[1]) {
                dir = "down";
                bounds[1]--;
            } else {
                path.push(matrix[i][j]);
                visited++;
                j++;                
            }
        } else if (dir === "down") {
            if(i === bounds[2]) {
                dir = "left";
                bounds[2]--;
            } else {
                path.push(matrix[i][j]);
                visited++;
                i++;
            }
        } else if (dir === "left") {
            if(j === bounds[3]) {
                dir = "up";
                bounds[3]++;
            } else {
                path.push(matrix[i][j]);
                visited++;
                j--;
            }
        } else if (dir === "up") {
            if(i === bounds[0]) {
                dir = "right";
                bounds[0]++;
            } else {
                path.push(matrix[i][j]);
                visited++;
                i--;                
            }
        }
    }
    
    return path;
};