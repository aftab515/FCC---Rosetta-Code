function add12Hours(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  // Extract elements of the date, then convert to Javascript date object
  const month = months.indexOf(dateString.match(/^[A-Za-z]+/)[0]);
  const day = parseInt(dateString.match(/\s\d+\s/)[0].trim());
  const year = parseInt(dateString.match(/\d{4}/)[0]);
  const hours = parseInt(dateString.match(/\d{4}\s*\d+/)[0].slice(-2).trim()) + (dateString.match(/am|pm/i)[0] == 'pm' ? 12 : 0);
  const minutes = parseInt(dateString.match(/[:]\d{2}/)[0].slice(1, 3));
  // New date object
  const inputdate = new Date(year, month, day, hours, minutes);
  // Add 12 hours to the date object
  inputdate.setHours(inputdate.getHours() + 12);
  // Print the updated date in the same format as the input
  const newhrs = inputdate.getHours();
  return months[inputdate.getMonth()] + " " + inputdate.getDate() + " " + inputdate.getFullYear() + " " + (newhrs > 12 ? newhrs % 12 : newhrs) + ":" +
    inputdate.getMinutes() + (newhrs >= 12 ? "pm" : "am") + " EST";
}