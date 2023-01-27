function getDateFormats() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
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
  const now = new Date();
  return [
    now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate(),
    weekdays[now.getDay()] + ", " + months[now.getMonth()] + ' ' + now.getDate() + ", " + now.getFullYear()
  ];
}