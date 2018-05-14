function arrayDouble(arr) {
  if (arr.length === 0) return [];
  let num = arr[0] * 2;
  return [num, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1, 2, 3]));