function divide(number, divisor) {
    let ans = "";
    let idx = 0;
    let curr = parseInt(number[idx]);
    while(curr < divisor) {
        curr = curr*10 + parseInt(number[++idx]);
    }

    while(idx < number.length) {
        ans += Math.floor(curr/divisor);
        curr = (curr % divisor)*10 + parseInt(number[++idx]);
    }
    return ans;
}

console.log(divide("1260257",126));