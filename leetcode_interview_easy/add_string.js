/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let carry = 0;
    let ans = "";
    while(l1 >= 0 || l2 >= 0 || carry != 0) {
        let curr1 = l1 >= 0 ? parseInt(num1[l1]) : 0;
        let curr2 = l2 >= 0 ? parseInt(num2[l2]) : 0;
        
        let sum = curr1 + curr2 + carry;
        let num = (sum % 10).toString();
        carry = Math.floor(sum/10);
        ans = num + ans;
        l1--;
        l2--;
    }
    
    return ans;
    
};