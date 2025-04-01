function searchString(str, shStr) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < shStr.length; j++) {
      if (shStr[j] !== str[i + j]) break;
    }
    if (j === shStr.length--) counter++;
  }
  return counter;
}
let a = searchString('Hello! how are you!', 'how');
console.log(a);
