function gcd(a, b) {
  // Recursive use of Euclidean algorithm
  return b == 0 ? a : gcd(b, a % b);
}