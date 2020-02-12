/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(s.length === 0 || k === 0) return 0;
    let hash = {};
    
    let low = 0; let high = 0;
    let unique = 0;
    let longest = 1;
    
    while(high < s.length) {
        if(unique <= k) {
            if(!(s[high] in hash)) {
                hash[s[high]] = 0;
                unique++;
            }
            hash[s[high]]++;
            high++;   
        }
        
        if(unique === k+1) {
            hash[s[low]]--;
            if(hash[s[low]] === 0) {
                unique--;
                delete hash[s[low]];
            }
            low++;
        }
        
        longest = Math.max(longest, high - low);
        
    }
    
    return longest;
};