function constructNote(msg, letters) {
  let counter = {};
  for (let i of letters) {
    counter[i] = (counter[i] || 0) + 1;
  }
  console.log('counter', counter);
  for (let i of msg) {
    if (!counter[i]) return false;
    else counter[i] -= 1;
  }
  return true;
}

let a = constructNote('aa', 'abc'); // false
let b = constructNote('abc', 'dcba'); // true
let c = constructNote('aabbcc', 'bcabcaddff'); // true
console.log(a, b, c);
