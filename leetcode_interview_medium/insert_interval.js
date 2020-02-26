/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    if(newInterval[0] < intervals[0][0]) {
        intervals.unshift(newInterval);
    }
    if(newInterval[0] > intervals[intervals.length-1][0]) {
        intervals.push(newInterval);
    }
    
    for(let i = 0; i < intervals.length; i++) {
        if(newInterval[0] === intervals[i][0]) {
            if(newInterval[1] > intervals[i][1]) {
                intervals.splice(i+1,0,newInterval);
                break;
            } else {
                intervals.splice(i,0,newInterval);
                break;
            }
        }
        else if(newInterval[0] > intervals[i][0] && newInterval[0] < intervals[i+1][0]) {
           intervals.splice(i+1,0,newInterval);
                break;
        }
    }
    
    
    let start = intervals[0][0];
    let end = intervals[0][1];
    let res = [];
    
    for(let i = 0; i < intervals.length; i++) {
        if(intervals[i][0] > end) {
            res.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        } else {
            end = Math.max(intervals[i][1],end);
        }
    }
    res.push([start,end]);
    return res;
    
};