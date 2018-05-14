function calculate(n) {
  if (n === 0) return 0;
  return n + calculate(n - 1);
}

console.log(calculate(8));