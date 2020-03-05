function subtract(num1,num2) {
    if(num1.length < num2.length) return subtract(num2,num1);

    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let carry = 0;
    let ans = "";

    while(l1 >= 0 || l2 >= 0 || carry) {
        let c1 = l1 >= 0 ? num1[l1] : 0;
        let c2 = l2 >= 0 ? num2[l2] : 0;

        let diff = c1 - c2 - carry;
        
        if(diff < 0) {
            diff = diff + 10;
            carry = 1;
        } else {
            carry = 0;
        }
        ans = diff.toString() + ans;

        l1--;
        l2--;
    }

    return ans;
}

console.log(subtract("122387876566565674", "31435454654554"));

