function linearCongGenerator(r0, a, c, m, n) {
  return n === 0 ?
    r0 :
    (a * linearCongGenerator(r0, a, c, m, n - 1) + c) % m;
}