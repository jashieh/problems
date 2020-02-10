/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = new Array(height.length).fill(0);
    let leftMax = 0;
    
    for(let i = 0; i < height.length; i++) {
        if(height[i] > leftMax) {
            leftMax = height[i];
        }
        left[i] = leftMax;
    }
    
    let rightMax = 0;
    let sum = 0;
    for(let i = height.length - 1; i >= 0; i--) {
        if(height[i] > rightMax) {
            rightMax = height[i];
        }
        sum += Math.min(rightMax, left[i]) - height[i];
    }
    
    return sum;
    
};

//
var trap = function(height) {
    let low = 0;
    let high = height.length - 1;
    
    let leftMax = 0;
    let rightMax = 0;
    let sum = 0;
    
    while(low < high) {
        if(height[low] < height[high]) {
            height[low] > leftMax ? leftMax = height[low] : sum += leftMax - height[low];
            low++;
        } else {
            height[high] > rightMax ? rightMax = height[high] : sum += rightMax - height[high];
            high--;
        }
    }
    
    return sum;
};