/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let hash = {};
    for(let task of tasks) {
        if(!(task in hash)) hash[task] = 0;
        hash[task]++;
    }
    
    let max = Math.max(...Object.values(hash)) - 1;
    let idle = max * n + max;
    
    for(let key in hash) {
        idle -= Math.min(hash[key],max);
    }
    
    return idle > 0 ? idle + tasks.length : tasks.length;
    
};