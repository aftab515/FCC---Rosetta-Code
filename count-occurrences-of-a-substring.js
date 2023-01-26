function countSubstring(str, subStr) {
  let i = 0;
  let count = 0;
  const subStrLen = subStr.length;
  const upperBound = str.length - subStrLen;
  while (i < upperBound) {
    if (str.substr(i, subStrLen) === subStr) {
      count++;
      i += subStrLen;
    } else {
      i++;
    }
  }
  return count;
}