// https://leetcode.com/problems/maximum-average-subarray-i/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxAvgSubArray(arr, k) {
    let currentSum = 0;
    let maxSum = 0;
    for(let i = 0; i < k; i++) {
        maxSum += arr[i]
    }
    currentSum = maxSum;
    for(let i = k; i < arr.length; i++) {
        // move the window by 1. 
        // which we can get by removing the first element (arr[i - k]) and adding next element (arr[i])
        currentSum = currentSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum/k;
}

const input = [1,12,-5,-6,50,3];
const result = maxAvgSubArray(input, 4)
console.log('result===>', result)
let nums = [5];
console.log('result2===>', maxAvgSubArray(nums, 1))
