function isBabbage(testVal, endDigits) {
  const endStr = '' + endDigits;
  const squareStr = ('' + Math.pow(testVal, 2))
    .slice(-endStr.length);
  return endStr === squareStr;
}

function babbage(babbageNum, endDigits) {
  const start = Math.floor(Math.sqrt(endDigits));
  for (let i = start; i <= babbageNum; i++)
    if (isBabbage(i, endDigits))
      return i;
}

console.log(babbage(99736, 269696));