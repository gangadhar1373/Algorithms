# Sorting

There are many ways of sorting. Some are efficient in certain cases and others are in some other cases.
[Sorting Animations](https://www.toptal.com/developers/sorting-algorithms)

1. Bubble Sort: A sorting algorithm where largest element bubbles up to the top. In each iteration we compare 2 elements and we swap if the first element is grater than the second one.

#### Swapping in javascript:

```js
// ES 5
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// Es2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

2. Selection sort
   Loops through the array find the smallest and swaps the smallest with current element
3. Insertion sort
   Loop through the array and places the each element in the right place means compares with previous element and if its smaller than before elements place it before those elements
4. Merge sort
   Split all the elements in array into small arrays that contains 1 or 0 elements. Then sort and merge the arrays. Time complexity (O n log n)
