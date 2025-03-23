function bubbleSortNaive(arr) {
  console.log('arr', arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  // Outer loop start from the end of the array,
  // In short Outer loop tells us how many times we need to loop through
  for (let i = arr.length; i > 0; i--) {
    let noSwaps;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log('ONE PASS COMPLETED!');
  return arr;
}
let a = [9, 6, 4, 3, 6, -1, -4];

console.log(bubbleSort(a));
