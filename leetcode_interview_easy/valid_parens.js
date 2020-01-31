/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!(s[i] in hash)) {
            stack.push(s[i]);
        } else {
            if(stack[stack.length-1] !== hash[s[i]]) {
                return false;
            } else {
                stack.pop();
            }
        }    
    }
        
    return stack.length === 0; 
};