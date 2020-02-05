/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    let out = [];
    
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= start && intervals[i][1] <= end) {
            continue;
        }
        else if(intervals[i][0] <= end) {
            end = intervals[i][1];
        } else {
            out.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }    
    }
    
    out.push([start,end]);
    
    return out;
    
};