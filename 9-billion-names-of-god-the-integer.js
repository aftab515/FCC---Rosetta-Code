function numberOfNames(num) {
  // Array of integer partition function values
  const p_n = Array(num + 1).fill(0);
  p_n[0] = 1;
  p_n[1] = 1;
  p_n[2] = 2;
  // Fill with recurrence relation
  // P(n) = Sum_k=1:n (-1)^(k+1)*(P(n-k(3k-1)/2) + P(n-k(3k+1)/2))
  for (let n = 3; n <= num; n++) {
    for (let k = 1; k <= n; k++) {
      const d = n - k*(3*k - 1)/2;
      if (d >= 0) {
        p_n[n] += (-1)**(k + 1)*p_n[d];
      } else {
        break;
      }
      if (d - k >= 0) {
        p_n[n] += (-1)**(k + 1)*p_n[d - k];
      } else {
        break;
      }
    }
  }
  return p_n[num];
}