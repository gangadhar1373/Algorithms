function reverse(str) {
  if (str.length <= 1) return str;
  console.log('sliced', str.slice(1), str[0]);
  return reverse(str.slice(1)) + str[0];
}

let a = reverse('reverse this string');
console.log(a);
