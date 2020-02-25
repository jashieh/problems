/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let stripped = paragraph.replace(/[!?'.,;]/g," ")
    let words = stripped.split(" ");
    let hash = {};
    for(let word of words) {
        word = word.toLowerCase();
        if(!banned.includes(word) && word !== "") {
            word in hash ? hash[word]++ : hash[word] = 1;
        }
    }
    
    let max = 0;
    let word = "";
    for(let key in hash) {
        if(hash[key] >= max) {
            max = hash[key];
            word = key;
        }
    }
    
    return word;
    
};