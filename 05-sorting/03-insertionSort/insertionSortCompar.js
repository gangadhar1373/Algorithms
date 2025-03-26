function insertionSort(arr, comparator) {
  function compareCurrentVal(comparator, j, currentVal) {
    if (
      (typeof comparator !== 'function' && j >= 0 && arr[j] >= currentVal) ||
      (typeof comparator === 'function' &&
        arr[j] &&
        currentVal &&
        comparator(currentVal, arr[j]) < 0)
    )
      return true;
  }
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; compareCurrentVal(comparator, j, currentVal); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let a = insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
let b = insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
let c = insertionSort([1, 2, 3]); // [1, 2, 3]
let d = insertionSort([]);
console.log(a, b, c, d);
var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
let e = insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(e);
var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

let f = insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
console.log(f);

var moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

let g = insertionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
console.log(g);
