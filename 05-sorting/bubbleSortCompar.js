function bubbleSort(arr, comparator) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (
        (typeof comparator !== 'function' && arr[j] > arr[j + 1]) ||
        (typeof comparator === 'function' && comparator(arr[j], arr[j + 1]) > 0)
      ) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

let a = bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
let b = bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
let c = bubbleSort([1, 2, 3]); // [1, 2, 3]
let d = bubbleSort([]);
console.log(a, b, c, d);

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
let e = bubbleSort(nums);
let f = bubbleSort(kitties, strComp);

console.log(e, f);

let moarKittyData = [
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
  return b?.age - a?.age;
}

let g = bubbleSort(moarKittyData, oldestToYoungest);
console.log(g);
