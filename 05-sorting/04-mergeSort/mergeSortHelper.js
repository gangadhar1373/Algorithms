function mergeHelper1(arr1, arr2) {
  let outArr = [];
  let length = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < length; i++) {
    if (arr1[i] && arr2[i]) {
      if (arr1[i] < arr2[i]) outArr.push(arr1[i], arr2[i]);
      else outArr.push(arr2[i], arr1[i]);
    } else if (arr1[i]) outArr.push(arr1[i]);
    else if (arr2[i]) outArr.push(arr2[i]);
  }
  return outArr;
}
// better implementation
export function mergeHelper(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

let a = mergeHelper([1, 3, 5, 7, 9], [2, 4, 6, 8]);
// console.log(a);

let b = mergeHelper1([1, 3, 5, 7, 9], [2, 3]);
// console.log(b);
