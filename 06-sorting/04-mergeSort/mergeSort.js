import { mergeHelper } from './mergeSortHelper.js';

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return mergeHelper(left, right);
}

console.log(mergeSort([1, 4, 2, 3, 13, 6, 0, -1, 3, 43, 23, 85]));
