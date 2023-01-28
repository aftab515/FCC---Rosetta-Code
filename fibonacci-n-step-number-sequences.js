function fib_luc(n, len, w) {
  const sequence = [w === 'l' ? 2 : 1, 1];
  for (let i = 2; i < len; i++)
    sequence.push(sequence
      .slice(i > n ? i - n : 0, sequence.length)
      .reduce((a, b) => a + b));
  return sequence
}