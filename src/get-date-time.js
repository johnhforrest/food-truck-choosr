const padNumber = (value) => {
  return value >= 10
    ? value
    : `0${value}`;
};

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Assuming current time zone is PST
const currentDate = new Date(Date.now());
const currentDay = daysOfWeek[currentDate.getDay()];
const currentTime = `${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

module.exports = {
  currentDate,
  currentDay,
  currentTime,
};
