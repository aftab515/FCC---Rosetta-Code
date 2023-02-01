// Memoized values
const Q = Array(2500).fill(0);
Q[1] = 1; Q[2] = 1;

function hofstadterQ(n) {
  if (!n || n < 1)
    // No argument or invalid argument
    return "integer";
  else if (Q[n])
    // Value already computed and stored
    return Q[n];
  else
    // Value needs to be computed and stored
    return Q[n] = hofstadterQ(n-hofstadterQ(n-1)) + hofstadterQ(n-hofstadterQ(n-2));
}