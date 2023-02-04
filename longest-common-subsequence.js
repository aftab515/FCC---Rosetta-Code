function lcs(a, b) {
  if (a.length == 0 || b.length == 0) {
    return "";
  } else if (a.substring(a.length - 1) === b.substring(b.length - 1)) {
    const lastChar = a.substring(a.length - 1);
    return lcs(a.substring(0, a.length - 1), b.substring(0, b.length - 1)) + lastChar;
  } else {
    const aSubseq = lcs(a, b.substring(0, b.length - 1));
    const bSubseq = lcs(a.substring(0, a.length - 1), b)
    return aSubseq.length > bSubseq.length ? aSubseq : bSubseq;
  }
}