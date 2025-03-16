// Implement a function called countUniqueValues,
// which accepts a sorted array and counts the unique values in the array
// There can be negative values but array will be sorted.

function countUniqueValues(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) j++;
  }
  return j;
}

const a1 = countUniqueValues([1, 1, 1, 1, 1, 1, 2]);
const a2 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 14]);
const a3 = countUniqueValues([]);
const a4 = countUniqueValues([-2, -1, -1, 0, 1]);

console.log(a1, a2, a3, a4);
