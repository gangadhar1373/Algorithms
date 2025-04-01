function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivIndex - 1);
    // right
    quickSort(arr, pivIndex + 1, right);
  }
  return arr;
}
let a = quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]);
console.log(a);
