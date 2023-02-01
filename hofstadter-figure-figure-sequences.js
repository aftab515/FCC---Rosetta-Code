const R = [null, 1];
const S = [null, 2];

function extendHofstaterSequenceSequence(n) {
  let current = Math.max(R[R.length - 1], S[S.length - 1]);
  while (R.length <= n || S.length <= n) {
    let i = Math.min(R.length, S.length) - 1;
    current++;
    if (current === R[i] + S[i]) {
      R.push(current);
    } else {
      S.push(current);
    }
  }
}

function ffr(n) {
  extendHofstaterSequenceSequence(n);
  return R[n];
}

function ffs(n) {
  extendHofstaterSequenceSequence(n);
  return S[n];
}