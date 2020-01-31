/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let range = [0,0];
    
    for(let i = 0; i < s.length - 1; i++) {
        let p1 = findLength(s,i,i);
        let p2 = findLength(s,i,i+1);
        
        if(p1[1] - p1[0] > range[1] - range[0]) {
            range = p1;
        }
        if(p2[1] - p2[0] > range[1] - range[0]) {
            range = p2;
        }
        
    }
    
    return s.slice(range[0],range[1] + 1);
};

function findLength(s, i, j) {
    while(i >= 0 && j < s.length) {
        if(s[i] !== s[j]) {
            return [i + 1,j - 1];
        }
        i--;
        j++;
    }
    return [i + 1,j - 1];
}