/**
 * Given an unsorted array and a number n,
 * find if there exists a pair of elements in the array whose difference is n.
 * This function should return true if the pair exists or false if it does not.
 */

function findPair(arr, n) {
  if (!arr.length) return false;
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    let diff = arr[j] - arr[i];
    if (i !== j && Math.abs(diff) === Math.abs(n)) {
      return true;
    } else if (diff < n) j++;
    else i++;
  }
  return false;
}

const a = findPair([6, 1, 4, 10, 2, 4], 2); // true
const b = findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1); // true
const c = findPair([4, -2, 3, 10], -6); // true
const d = findPair([6, 1, 4, 10, 2, 4], 22); // false
const e = findPair([], 0); // false
const f = findPair([5, 5], 0); // true
const g = findPair([-4, 4], -8); // true
const h = findPair([-4, 4], 8); // true
const i = findPair([1, 3, 4, 6], -2); // true
const j = findPair([0, 1, 3, 4, 6], -2); // true

console.log(a, b, c, d, e, f, g, h, i, j);
