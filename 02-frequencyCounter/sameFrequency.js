function sameFrequency(num1, num2) {
  let num1Counter = {};
  num1 = String(num1);
  num2 = String(num2);
  if (num1.length !== num2.length) return false;
  for (let i of num1) {
    num1Counter[i] = (num1Counter[i] || 0) + 1;
  }
  for (let i = 0; i < num2.length; i++) {
    let dig = num2[i];
    if (!num1Counter[dig]) return false;
    else num1Counter[dig] -= 1;
  }
  return true;
}

const a = sameFrequency(182, 281); // true
const b = sameFrequency(34, 14); // false
const c = sameFrequency(3589578, 5879385); // true
const d = sameFrequency(22, 222); // false
console.log(a, b, c, d);
