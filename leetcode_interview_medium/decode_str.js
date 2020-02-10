/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let nums = "0123456789";
    
    let stack = [];
    let str = "";
    let i = 0;
    while(i < s.length) {
        if(nums.includes(s[i])) {
            let num = "";
            while(nums.includes(s[i])) {
                num += s[i];
                i++;
            }
            i--;
            num = parseInt(num);
            stack.push(num); 
        }
        else if(s[i] === "[") {
            stack.push(s[i]); 
            
        }
        else if (s[i] === "]") {
            let temp = "";
            let val = stack.pop();
            
            while(val !== "[") {
                temp += val;
                val = stack.pop();
            }
                        
            let temp2 = "";
            let num = stack.pop();
            for(let j = 0; j < num; j++) {
                temp2 += temp;
            }
            
            if(stack.length) {
                stack.push(temp2);
            } else {
                str += temp2.split("").reverse().join("");
            }
        } 
        else if(stack.length) {
            stack.push(s[i]);
        } 
        else {
            str += s[i];
        }
        i++;
    }
    
    return str;
};