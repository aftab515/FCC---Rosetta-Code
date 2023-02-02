function isValid(iban) {
  // Check for non-alphanumeric and 2 letter start
  if (iban.match(/\[^A-Z0-9]+/) ||
      iban[0].charCodeAt(0) < 'A'.charCodeAt(0) ||
      iban[0].charCodeAt(0) > 'Z'.charCodeAt(0) ||
      iban[1].charCodeAt(0) < 'A'.charCodeAt(0) ||
      iban[1].charCodeAt(0) > 'Z'.charCodeAt(0)) {
    return false;
  }
  // Rearrange sections
  let sections = iban.split(' ');
  sections.push(sections.shift());
  // Convert to integer
  sections = sections
    .map((section) => 
      section
        .split('')
        .map((char) => 
          char.charCodeAt(0) >= 'A'.charCodeAt(0) &&
          char.charCodeAt(0) <= 'Z'.charCodeAt(0) ?
            char.charCodeAt(0) - 'A'.charCodeAt(0) + 10 :
            char
        )
        .join('')
  );
  const num = sections.join('');
  // Check the check digit
  return extendedMod(num, 97) === 1;

}

function extendedMod(num, modulo) {
  // Compute mod of 30 digit number
  const digits = num.split('');
  let currentDigits = [digits.splice(0, 9).join('')];
  while (digits.length > 0) {
    currentDigits = (parseInt(currentDigits) % modulo).toString();
    currentDigits += digits.splice(0, 7).join('');
  }
  return currentDigits % modulo;
}