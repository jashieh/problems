/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0;
    intervals.sort((a,b) => {
        if(a[0] < b[0]) return -1;
        else if(a[0] > b[0]) return 1;
        else {
            if(a[1] < b[1]) return -1
            else if(a[1] > b[1]) return 1;
            else return 0;
        }
    });
    
    let count = 0;
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < end) {
            count++;
            if(end > intervals[i][1]) {
                end = intervals[i][1];
            }
        } else {
            end = intervals[i][1];
        }
    }
    
    return count;
};