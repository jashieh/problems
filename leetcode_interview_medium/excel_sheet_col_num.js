/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;
    
    let col = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        col += (alphabet.indexOf(s[i])+1)*Math.pow(26,count);
        count++;
    }
    
    return col;
};