// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== n && start <= end) {
    if (n < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === n ? middle : -1;
}

let a = binarySearch([1, 2, 3, 4, 5, 6, 7, 8], -10);
console.log(a);
