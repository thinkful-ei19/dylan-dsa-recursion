function countDown(from) {
  if (from === 0) return;
  console.log(from);
  countDown(from - 1);
}

countDown(10);