function jortsort(array) {
  const array1 = JSON.stringify(array);
  return JSON.stringify(array.sort((a, b) => a - b)) === array1;
}