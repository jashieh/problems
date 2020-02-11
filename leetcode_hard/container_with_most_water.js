/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let low = 0;
    let high = height.length - 1;
    let max = 0;
    
    while(low < high) {
        let area = Math.min(height[low],height[high]) * (high - low);
        
        max = Math.max(max,area);
        if(height[low] > height[high]) {
            high--;
        } else {
            low++
        }
    }
    
    return max;
};