/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let fast = getNum(n);
    let slow = n;
    
    while(fast !== 1 && fast !== slow) {
        slow = getNum(slow);
        fast = getNum(getNum(fast));
    }
    
    return fast === 1;
};

function getNum(n) {
    let sum = 0;
    while(n > 0) {
        sum += Math.pow(n % 10,2);
        n = Math.floor(n/10);
    } 
    return sum;
}