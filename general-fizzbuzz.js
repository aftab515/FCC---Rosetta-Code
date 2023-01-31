function genFizzBuzz(rules, num) {
  let fizzBuzz = "";
  rules.forEach(rule => {
    if (num % rule[0] === 0)
      fizzBuzz += rule[1];
  });
  return fizzBuzz || num.toString();
}