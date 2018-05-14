function binaryRep(num) {
  if (num < 1) return '';
  let remainder = num % 2;
  let newNum = num / 2;
  if (remainder) newNum = (num - 1) / 2;
  return binaryRep(newNum) + `${remainder}`;
}

console.log(binaryRep(25));