/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

a = power(2, 8);
b = power(5, 6);
c = power(4, 3);

console.log(a, b, c);
