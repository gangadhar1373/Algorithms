function selectionSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Consider first element as smallest element in the array
    let smallest = i;
    // Again loop through the array from i + 1 to find the smaller elements
    for (let j = i + 1; j < arr.length; j++) {
      // If you find another number smaller than previous assign it to smallest
      if (arr[j] < arr[smallest]) smallest = j;
    }
    console.log('Swapping', arr);
    // If there is smaller element swap it with the current element
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    console.log('Swapped', arr);
  }
  return arr;
}

let a = selectionSort([32, 28, 12, 48, 22]);
console.log(a);
