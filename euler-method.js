function eulersMethod(x1, y1, x2, h) {
  const cooling = (_, y)  => -0.07 * (y - 20);

  let x = x1, y = y1;
  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    // Calculate the next values
    y += h * cooling(x, y);
    x += h;
  }
  return y;
}