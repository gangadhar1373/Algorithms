function maxSubArraySum1(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let a = maxSubarraySum([100, 200, 300, 400], 2); // 700
let b = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
let c = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
let d = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
let e = maxSubarraySum([2, 3], 3); // null
console.log(a, b, c, d, e);
