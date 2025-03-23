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

2.
