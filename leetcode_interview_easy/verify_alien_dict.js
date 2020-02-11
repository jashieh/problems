/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i+1];
        
        for(let j = 0; j < word1.length; j++) {
            if(j > word2.length) {
                return false;
            }
            if(order.indexOf(word1[j]) > order.indexOf(word2[j])) {
                return false;
            }
            if(order.indexOf(word1[j]) < order.indexOf(word2[j])) {
                break;
            }
        }
    }
    return true;
};