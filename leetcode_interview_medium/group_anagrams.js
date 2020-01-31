/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    for(let str of strs) {
        let key = getValue(str);
        if(!(key in hash)) hash[key] = [];
        hash[key].push(str);
    }
    return Object.values(hash);
    
};

function getValue(str) {
    let value = new Array(26).fill(0);
    for(let char of str) {
        value[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return value.toString();
}