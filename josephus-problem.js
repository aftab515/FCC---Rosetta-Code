function josephus(init, kill) {
  // Setup
  let currPrisoner = -1;
  const prisoners = Array(init).fill(true);
  // Execute prisoners
  for (let numAlive = init; numAlive > 1; numAlive--) {
    // Find next prisoner
    for (let numSkip = kill; numSkip > 0; numSkip--) {
      do {
        currPrisoner = (currPrisoner + 1) % init;
      } while (!prisoners[currPrisoner]);
    }
    // Execute prisoner
    prisoners[currPrisoner] = false;
  }
  // Return last man standing
  return prisoners.indexOf(true);
}