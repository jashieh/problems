/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i = 0; i < tokens.length; i++) {
        if(tokens[i] === "*" || tokens[i] === "/" || tokens[i] === "+" || tokens[i] === "-") {
            let num1 = stack.pop();
            let num2 = stack.pop();
            
            let res = 0;
            if(tokens[i] === "+") {
                res = num1 + num2;
            } else if(tokens[i] === "-") {
                res = num2 - num1;
            } else if(tokens[i] === "*") {
                res = num1 * num2;
            } else {
                if(num2 < 0 ^ num1 < 0) {
                    res = Math.ceil(num2/num1);
                } else {
                    res = Math.floor(num2 / num1);     
                }
            }
            stack.push(res);
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    
    return stack.pop()
    
};