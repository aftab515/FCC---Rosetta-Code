function findXmasSunday(start, end) {
  const sundayYears = [];
  for (let i = start; i <= end; i++) { 
    if (new Date(i, 11, 25).getDay() == 0) {
      sundayYears.push(i);
    }
  }
  return sundayYears;
}