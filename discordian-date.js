const SEASONS   = ["Chaos", "Discord", "Confusion", "Bureaucracy", "The Aftermath"];
const WEEKDAYS  = ["Sweetmorn", "Boomtime", "Pungenday", "Prickle-Prickle", "Setting Orange"];
const APOSTLES  = ["Mungday", "Mojoday", "Syaday", "Zaraday", "Maladay"];
const HOLIDAYS  = ["Chaoflux", "Discoflux", "Confuflux", "Bureflux", "Afflux"];
const DAY_COUNT = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

Date.prototype.isLeapYear = function () {
  const year = this.getFullYear();
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
};

Date.prototype.getDayOfYear = function () {
  const month = this.getMonth();
  const day = this.getDate();
  let dayOfYear = DAY_COUNT[month] + day;
  if (month > 1 && this.isLeapYear()) dayOfYear++;
  return dayOfYear;
};

Date.prototype.isToday = function () {
  const today = new Date();
  return this.getDate() === today.getDate() &&
         this.getMonth() === today.getMonth() &&
         this.getFullYear === today.getFullYear();
};


function discordianDate(date) {
  if (!date) date = new Date();
  const year = date.getFullYear();
  const yearOfOurLady = year + 1166;
  let dayOfYear = date.getDayOfYear();
  let celebrateHoliday = "";

  if (date.isLeapYear()) {
    if (dayOfYear === 60) {
      celebrateHoliday = "St. Tib\'s Day";
    } else if (dayOfYear > 60) {
      dayOfYear--;
    }
  }
  dayOfYear--;

  const divDay = Math.floor(dayOfYear / 73);
  const seasonDay = (dayOfYear % 73) + 1;
  if (seasonDay === 5) celebrateHoliday = APOSTLES[divDay];
  if (seasonDay === 50) celebrateHoliday = HOLIDAYS[divDay];

  const season = SEASONS[divDay];
  const dayOfWeek = WEEKDAYS[dayOfYear % 5];
  const nth = (seasonDay % 10 === 1) ? 'st'
              : (seasonDay % 10 === 2) ? 'nd'
              : (seasonDay % 10 === 3) ? 'rd'
              : 'th';

  return "" + dayOfWeek +
         ", the " + seasonDay + nth +
         " day of " + season +
         " in the YOLD " + yearOfOurLady +
         (celebrateHoliday ? ". Celebrate " + celebrateHoliday + "!" : "");
}