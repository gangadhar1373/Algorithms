function areThereDuplicates(...args) {
  const arr = [...args];
  let result = {};
  for (let i of arr) {
    result[i] = (result[i] || 0) + 1;
  }
  for (let key in result) {
    if (result[key] !== 1) return true;
  }
  return false;
}

let a = areThereDuplicates(1, 2, 3); // false
let b = areThereDuplicates(1, 2, 2); // true
let c = areThereDuplicates('a', 'b', 'c', 'a'); // true
console.log(a, b, c);
