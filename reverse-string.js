function reverseString(str) {
  if (str.length === 0) return '';
  let lastChar = str[str.length - 1];
  return lastChar + reverseString(str.slice(0, -1));
}

console.log(reverseString('hello'));