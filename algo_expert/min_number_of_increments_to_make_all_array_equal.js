// We are given an array consisting of n elements. At each operation you can select any one 
// element and increase rest of n-1 elements by 1. You have to make all elements equal performing 
// such operation as many times you wish. Find the minimum number of operations needed for this.

// Brute force
// A simple way to make all elements equal is that at each step find the largest elements and then 
// increase all rest n-1 elements by 1. We should keep doing this operation till all elements become equal. 
// Time Complexity : O(n^2)

// Optimized 

// Decrement all elements to the smallest element
// minOp = arrSum - n * smallest

memo = { 2: 5 };
