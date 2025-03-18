/**
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 */
function averagePair(arr, target) {
  if (!arr.length) return false;
  // initialize end pointer
  let j = arr.length - 1;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // check if target avg is achieved
    const avg = arr[i] + arr[j] / 2;
    console.log('avg', avg, 'target', target);
    // if avg is reached then return true
    if (avg === target) return true;
    // if avg is grater then move j towards
    else if (avg > target) j--;
    // else return false
    else return false;
  }
}

let a = averagePair([1, 2, 3], 2.5); // true
let b = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
let c = averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
let d = averagePair([], 4); // false

console.log(a, b, c, d);
