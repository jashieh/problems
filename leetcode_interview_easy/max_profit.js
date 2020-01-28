/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
        // if(i === 0 && prices[i+1] > prices[i]) {
        //     profit -= prices[i];
        // } 
        // else if (i === prices.length - 1 && prices[i-1] < prices[i]) {
        //     profit += prices[i];
        // }
        // else if(prices[i-1] >= prices[i] && prices[i+1] > prices[i]) {
        //     profit -= prices[i];
        // }
        // else if (prices[i-1] < prices[i] && prices[i+1] <= prices[i]) {            
        //     profit += prices[i];
        // }
    }
    
    return profit;
    
};