function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    console.log('arr', arr);
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log('j', arr[j], 'currentVal', currentVal);
      arr[j + 1] = arr[j];
      console.log('moved arr', arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let a = insertionSort([28, 2, 16, 54, 14, 2]);
// console.log(a);
