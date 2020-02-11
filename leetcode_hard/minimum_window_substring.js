/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let req = {};
    
    for(let char of t) {
        char in req ? req[char]++ : req[char] = 1;
    }
    
    
    let low = 0;
    let high = 0;
    let ans = [Infinity,0,0];

    let required = Object.keys(req).length;
    let formed = 0;
    let hash = {};
    
    while(high < s.length) {
        s[high] in hash ? hash[s[high]]++ : hash[s[high]] = 1;
        
        if(s[high] in req && req[s[high]] === hash[s[high]]) {
            formed++;
        }
        
        while(formed === required) {
            if(high - low < ans[0]) {
                ans[0] = high - low;
                ans[1] = high + 1;
                ans[2] = low;
            }
            
            hash[s[low]]--;
            
            if(s[low] in req && hash[s[low]] < req[s[low]]) {
                formed--;
            }
            
            low++;        
        }
        
        high++;
    }
    
    return s.slice(ans[2],ans[1]);
};