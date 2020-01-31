/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let hash = {};
    
    let low = 0;
    let high = 0;
    
    while(high < s.length) {
        if(!(s[high] in hash)) {
            hash[s[high]] = high;
            if(high - low + 1 > longest) longest = high - low + 1;
            high++;
        } else {
            delete hash[s[low]];
            low++;
        }
    }
    
    return longest;
};