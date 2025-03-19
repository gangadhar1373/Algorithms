## Recursion

A process(function) that calls itself till a base case is met.

There are two essential pars of a recursive function.

1. Base case
2. Different input(Every time you call a recursive function there should be a input for the function should be different)

### Examples

```js
// countDown
function countDown(num) {
  if (num < 0) {
    console.log('All Done!');
    return; // Need to have this return else it logs and goes to -ve integers
  }
  console.log(num);
  num--;
  countDown(num);
}
```

```js
// sumRange
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

```js
// factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

### Potential pit falls

1. No base case
2. Forgetting to return or returning wrong thing in the base case
3. Stack overflow or call stack exceeding

### Helper method recursion

This is a pattern in recursion where you have 2 methods

```js
function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

### Example

```js
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
```
