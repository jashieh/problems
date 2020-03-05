/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    if(num1.length < num2.length) return multiply(num2,num1);
    
    let arr = [];
    
    let offset = 0;
    for(let i = num2.length - 1; i >= 0; i--) {
        let row = "";
        for(let k = 0; k < offset;k++) {
            row += "0";
        }
            
        let carry = 0;
        let j = num1.length - 1;
        while(j >= 0 || carry) {
            let prod = j >= 0 ? parseInt(num2[i]) * parseInt(num1[j]) + carry : carry;
            row = (prod % 10).toString() + row;
            carry = Math.floor(prod/10);
            j--;
        }
        arr.push(row);
        offset++;
    }
    
    let lengths = new Array(arr.length);
    let longest = 0;
    for(let i = 0; i < arr.length;i++) {
        lengths[i] = arr[i].length - 1;
        longest = Math.max(longest, lengths[i]);
    }
    
    let car = 0;
    let ans = "";
    while(longest >= 0 || car) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            let curr = lengths[i] >= 0 ? parseInt(arr[i][lengths[i]]) : 0;
            sum += curr;
            lengths[i]--;
        }
        sum += car;
        ans = (sum % 10).toString() + ans;
        car = Math.floor(sum/10);
        longest--;
    }
    return ans;
};