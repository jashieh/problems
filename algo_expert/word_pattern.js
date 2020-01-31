var wordPattern = function(pattern, str) {
    let arr = str.split(" ");
    if(pattern.length !== arr.length) return false;
    
    let hash = {};
    
    
    for(let i = 0;i < pattern.length; i++) {
        if(pattern[i] in hash) {
            if(hash[pattern[i]] !== arr[i]) {
            return false;
                
            }
        }
        else {
            if (Object.values(hash).includes(arr[i])) return false;
            hash[pattern[i]] = arr[i];
        }
    }
    return true;
};