function computeFib(n) {
  if (n < 0) return 0;
  if (n === 1) return 1;
  return computeFib(n - 1) + computeFib(n - 2);
}

console.log(computeFib(7));