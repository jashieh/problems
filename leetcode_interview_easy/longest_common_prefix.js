var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    if(strs.length === 1) return strs[0];
    
    let pre = "";
    let j = 0;
    
    while(true) {
        if(j >= strs[0].length) break;
        let char = strs[0][j];
        for(let i = 0; i < strs.length; i++) {
            if(j > strs[i].length|| strs[i][j] !== char) {
                return pre;
            }
        }
        pre += char;
        j++;
    }
    return pre;
    
    
};