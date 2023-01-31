function lascii(cFrom, cTo) {
  // Initiate array to store letters
  const letters = [];
  // Store ascii values in two variables
  let codeFrom = cFrom.charCodeAt(0);
  let codeTo = cTo.charCodeAt(0);
  // Push the letters coresponding to ascii values
  for (let i = codeFrom; i <= codeTo; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
}