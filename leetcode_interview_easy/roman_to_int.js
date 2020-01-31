/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    
    let i = 0;
    let num = 0;
    
    while(i < s.length) {
        let curr = hash[s[i]];
        let next = i < s.length - 1 ? hash[s[i+1]] : 0;
        if(curr < next) {
            num -= hash[s[i]];
        } else {
            num += hash[s[i]];
        }
        i++;
    }
    return num;
    
    
};