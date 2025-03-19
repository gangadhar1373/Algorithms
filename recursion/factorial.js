function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

let a = factorial(1); // 1
let b = factorial(2); // 2
let c = factorial(4); // 24
let d = factorial(7); // 5040

console.log(a, b, c, d);
