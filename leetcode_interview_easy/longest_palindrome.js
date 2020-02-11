/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {};
    for(let char of s) {
        char in hash ? hash[char]++ : hash[char] = 1;
    }
    
    let len = 0;
    for(let key in hash) {
        len += Math.floor(hash[key]/2)*2;
        if (len % 2 === 0 && hash[key] % 2 === 1) {
            len++;
        }
    }
    return len;
}