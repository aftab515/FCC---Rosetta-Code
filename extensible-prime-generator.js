// Global object holding prime number seive
const SEIVE = {
  // Seive data
  _max: 3,
  _numPrimes: 2,
  _isComposite: [false],
  _isPrime: function (i) {
    return !this._isComposite[i];
  },

  // Indexing
  _indexToNum: i => 2*i + 3,
  _numToIndex: n => Math.floor((n - 1)/2),

  // Expand seive
  expand: function (newMax) {
    if (this._max >= newMax) return this._max;
    // Mark multiples of each prime as false (not prime)
    const upper     = this._numToIndex(newMax);
    const sqrtUpper = this._numToIndex(Math.sqrt(newMax)); // Done when i*i marked
    for (let i = 0; i <= sqrtUpper; i++) {
      // Check if number is multiple of any smaller odd number
      if (this._isPrime(i)) {
        // Mark all multiples of this number as true (composite)
        const prime = this._indexToNum(i);
        const lower = i + prime;
        for (let j = lower; j < upper; j += prime) {
          this._isComposite[j] = true;
        }
        this._numPrimes += prime > this._max;
      }
    }
    // Return
    return this._max = newMax;
  },

  // Count primes in range
  countPrimesInRange: function (lower, upper) {
    // Check seive bounds
    this.expand(upper);
    // Count primes in range
    let count = 0;
    const lowerIndex = this._numToIndex(lower);
    const upperIndex = this._numToIndex(upper);
    for (let i = lowerIndex; i < upperIndex; i++) {
      count += this._isPrime(i);
    }
    return count;
  },

  // Build array of primes in range
  showPrimesInRange: function (lower, upper) {
    // Check seive bounds
    this.expand(upper);
    // Build array of primes in range
    const range = [];
    const lowerIndex = this._numToIndex(lower);
    const upperIndex = this._numToIndex(upper);
    for (let i = lowerIndex; i < upperIndex; i++) {
      if (this._isPrime(i)) {
        range.push(this._indexToNum(i));
      }
    }
    return range;
  },

  // Build array of first N primes
  showFirstNPrimes: function (n) {
    // Check seive bounds
    this.expand(n * Math.log(n) * 2);
    // Build range
    const range = [2];
    let i = 0;
    let primeCount = 1;
    while (primeCount < n) {
      if (this._isPrime(i)) {
        primeCount++;
        range.push(this._indexToNum(i));
      }
      i++;
    }
    return range;
  },

  // Find nth prime
  findNthPrime: function (n) {
    // Check seive bounds
    this.expand(n * Math.log(n) * 2);
    // Find nth
    let i = 0;
    let primeCount = 1;
    while (primeCount < n) {
      primeCount += this._isPrime(i);
      i++;
    }
    return primeCount === 1 ? 2 : this._indexToNum(i - 1);
  }
}

// Generate and return primes
function primeGenerator(num, showPrimes) {
  if (Array.isArray(num)) {
    if (showPrimes) {
      return SEIVE.showPrimesInRange(num[0], num[1]);
    } else {
      return SEIVE.countPrimesInRange(num[0], num[1]);
    }
  } else {
    if (showPrimes) {
      return SEIVE.showFirstNPrimes(num);
    } else {
      return SEIVE.findNthPrime(num);
    }
  }
}

console.log("Test case 1:", primeGenerator(20, true));
console.log("Test case 2:", primeGenerator([100, 150], true));
console.log("Test case 3:", primeGenerator([7700, 8000], false));
console.log("Test case 4:", primeGenerator(10000, false));