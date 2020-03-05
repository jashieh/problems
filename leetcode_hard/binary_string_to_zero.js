function steps(str, k) {
    let l = str.length;
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        ans += "0";
    }

    let count = 0;

    while(str != ans) {
        let x = str.indexOf("1");
        while(x < l) {
            if(str[x] === "1") {
                str = str.slice(0,x) + "0" + str.slice(x+1);
            } else {
                str = str.slice(0,x) + "1" + str.slice(x+1);
            }
            x += k;
        }
        console.log(str);
        count++;
    }

    return count;
}

console.log(steps("100010010011110", 2));