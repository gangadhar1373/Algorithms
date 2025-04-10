/**
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

function minSubArrayLen(arr, n) {
  let currentSum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (currentSum < n) {
      currentSum += arr[i];
      j++;
    } else if (currentSum >= n) {
      return j;
    }
  }
  let tempSum = currentSum;
  for (let i = j; i < arr.length; i++) {
    tempSum = tempSum - arr[j - i] + arr[j];
  }
  return j;
}

let a = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
let b = minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
let c = minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
let d = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
let e = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
let f = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
let g = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

console.log('a', a);
