function mult(strNum1, strNum2) {
  // Convert to arrays
  const arrNum1 = strNum1
    .split('')
    .reverse()
    .map(d => parseInt(d));
  const arrNum2 = strNum2
    .split('')
    .reverse()
    .map(d => parseInt(d));
  const arrResult = Array(
      2 * Math.max(arrNum1.length, arrNum2.length)
    )
    .fill(0);
  // Multiply
  let carry = 0;
  for (let i = 0; i < arrNum1.length; i++) {
    for (let j = 0; j < arrNum2.length; j++) {
      arrResult[i + j] += arrNum1[i] * arrNum2[j] + carry;
      carry = Math.floor(arrResult[i + j] / 10);
      arrResult[i + j] %= 10;
    }
    arrResult[i + arrNum2.length] += carry;
    carry = 0;
  }
  // Convert result to string
  while (arrResult[arrResult.length - 1] === 0)
    arrResult.pop();
  return arrResult
    .reverse()
    .map(d => '' + d)
    .join('');
}