function getDigitString(num, place) {
  let numArr = num.toString().split('').reverse();
  if (i >= numArr.length) return 0;
  return Number(numArr[place]);
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  return Math.max(...arr.map(digitCount));
}

// let a = getDigit(-1234, 3);
// console.log(a);
// let b = digitCount(123);
// console.log(b);
// let c = mostDigits([1, 23, 32, 3434, 12345323]);
// console.log(c);

function radixSort(nums) {
  let maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      digitBuckets[getDigit(nums[j], i)].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

let a = radixSort([
  3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127,
]);
console.log(a);
