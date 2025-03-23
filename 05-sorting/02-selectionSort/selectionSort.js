function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) smallest = j;
    }
    console.log('Swapping', arr);
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    console.log('Swapped', arr);
  }
  return arr;
}

let a = selectionSort([32, 28, 12, 48, 22]);
console.log(a);
