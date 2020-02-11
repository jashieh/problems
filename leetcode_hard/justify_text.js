/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let queue = []; let len = 0;
    
    let ans = [];
    
    for(let i = 0; i < words.length; i++) {
        if(len + words[i].length + queue.length <= maxWidth) {
            len += words[i].length;
            queue.push(words[i]);
        } else {
            let space = queue.length === 1 ? maxWidth - len :
                Math.floor((maxWidth - len)/(queue.length - 1));
            let extra = queue.length === 1 ? 0 : (maxWidth - len) % (queue.length - 1);
            
            let str = ""
            while(queue.length) {
                str += queue.shift();
                if(str.length < maxWidth) {
                    console.log(space);
                    str += " ".repeat(space);
                }
                
                if(extra > 0) {
                    str += " ";
                    extra--;
                }
            }
            
            ans.push(str);
            len = words[i].length;
            queue.push(words[i]);
        }
    }
    
    let last = "";
    while(queue.length) {
        last += queue.shift();
        if(queue.length) last += " ";
    }
    while(last.length < maxWidth) {
        last += " ";
    }
    ans.push(last);
    
    return ans;
    
};