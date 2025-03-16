function findAllDuplicates(arr) {
  let counter = {};
  for (let i of arr) {
    counter[i] = (counter[i] || 0) + 1;
  }
  let result = [];
  console.log('counter', JSON.stringify(counter));
  for (let i in counter) {
    if (counter[i] > 1) result.push(Number(i));
  }
  console.log('result', result);
  return result.sort();
}

let a = findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
let b = findAllDuplicates([4, 3, 2, 1, 0]); // []
let c = findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1
console.log(a, b, c);
