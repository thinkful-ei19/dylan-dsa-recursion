function stringSplitter(str, separator) {
  if (str.length === 0) return [];
  if (!separator) return [...str];
  let index = str.indexOf(separator);
  let newString = str.slice(0, index);
  if (index < 0) {
    return [str, ...stringSplitter('', separator)];
  }
  return [newString, ...stringSplitter(str.slice(index + 1), separator)];

}

console.log(stringSplitter('he,llo, dylan', 'l'));