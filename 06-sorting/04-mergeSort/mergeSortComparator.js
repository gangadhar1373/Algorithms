function merge(arr1, arr2, comparator) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (
      typeof comparator === 'function'
        ? arr1[i] !== undefined &&
          arr2[j] !== undefined &&
          comparator(arr1[i], arr2[j]) < 0
        : arr1[i] < arr2[j]
    ) {
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

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid, arr.length), comparator);
  return merge(left, right, comparator);
}

// let a = mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// let b = mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// let c = mergeSort([1, 2, 3]); // [1, 2, 3]
// let d = mergeSort([]);
// console.log(a, b, c, d);

// var nums = [
//   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
//   32,
// ];
// let e = mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
// console.log(e);
// var kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

// function strComp(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   return 0;
// }

// let f = mergeSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// console.log(f);

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

let g = mergeSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

console.log(g);
