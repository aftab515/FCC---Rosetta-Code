function isPrime(n) {
  const limit = Math.sqrt(n);
  if (n % 2 === 0)
    return false;
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0)
      return false;
  }
  return true;
};

function isEmirp(n) {
  const r = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return n != Number(r) && isPrime(n) && isPrime(r);
};

function emirps(n, showValues = false) {
  const emirps = [];
  if (Array.isArray(n)) {
    // Find emirps in range
    const min = n[0], max = n[1];
    for (let i = min; i <= max; i++) {
      if (isEmirp(i))
        emirps.push(i);
    }
    return showValues ? emirps : emirps.length;
  } else if (typeof(n) === "number") {
    // Find first n emirps
    let curr = 13;
    while (emirps.length < n) {
      if (isEmirp(curr))
        emirps.push(curr);
      curr += 2;
    }
    return showValues ? emirps : emirps[emirps.length - 1];
  }
};