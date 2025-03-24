function selectionSort(arr, compare) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (
        (typeof comparator !== 'function' && arr[j] < arr[smallest]) ||
        (typeof compare === 'function' &&
          arr[j] &&
          arr[smallest] &&
          compare(arr[j], arr[smallest]) < 0)
      ) {
        smallest = j;
      }
    }
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
  }
  return arr;
}

const a = selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
const b = selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
const c = selectionSort([1, 2, 3]); // [1, 2, 3]
const d = selectionSort([]);
console.log(a, b, c, d);
var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
const e = selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
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

const f = selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
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

const g = selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

console.log(g);
