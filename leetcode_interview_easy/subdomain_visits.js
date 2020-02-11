/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let hash = {};
    
    for(let i = 0; i < cpdomains.length; i++) {
        let curr = cpdomains[i].split(" ");
        
        let sub = curr[1].split(".");
        let temp = "";
        for(let j = sub.length - 1; j >= 0; j--) {
            temp = sub[j] + (j < sub.length - 1 ? "." : "") + temp;
            
            if(!(temp in hash)) {
                hash[temp] = 0;
            }
            hash[temp] += parseInt(curr[0]);
        }
    }
    
    
    let out = [];
    
    for(let key in hash) {
        out.push(hash[key] + " " + key);
    }
    return out;
};