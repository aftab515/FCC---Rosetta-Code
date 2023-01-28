function farey(n) {
  const fareySeq = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      fareySeq.push([j + "/" + i, j / i]);
    }
  }
  return fareySeq
    .sort((a, b) => a[1] - b[1])
    .map(value => value[0]);
}