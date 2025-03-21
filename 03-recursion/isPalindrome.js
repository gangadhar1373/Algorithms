// Write a recursive function called isPalindrome
// which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  function reversStr(str) {
    if (str.length === 1) return str;
    return reversStr(str.slice(1)) + str[0];
  }
  return str === reversStr(str);
}

let a = isPalindrome('awesome'); // false
let b = isPalindrome('foobar'); // false
let c = isPalindrome('tacocat'); // true
let d = isPalindrome('amanaplanacanalpanama'); // true
let e = isPalindrome('amanaplanacanalpandemonium'); // false

console.log(a, b, c, d, e);
