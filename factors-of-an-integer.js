function factors(num) {
  const arr = [];
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return [1, ...arr, num]; 
}