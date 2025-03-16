/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */
function isSubsequence(str1, str2) {
  let i = 0; // pointer for str1
  let j = 0; // pointer for str2
  // if str1 is empty return true
  if (!str1) return true;
  // loop through str2 and check if str1 elements exist in str2
  console.log('str1', str1, 'str2', str2);
  while (j < str2.length) {
    console.log('str1[i]', str1[i], 'str2[j]', str2[j]);
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

let a = isSubsequence('hello', 'hello world'); // true
let b = isSubsequence('sing', 'sting'); // true
let c = isSubsequence('abc', 'abracadabra'); // true
let d = isSubsequence('abc', 'acb'); // false (order matters)
console.log(a, b, c, d);
