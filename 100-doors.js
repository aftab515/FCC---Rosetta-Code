function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let i = 1, ii = i*i;

  while (ii <= numDoors) {
    doors.push(ii);
    i++; ii = i*i;
  }

  return doors;
}