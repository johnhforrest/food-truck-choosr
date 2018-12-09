const padNumber = (value) => {
  return value >= 10
    ? value
    : `0${value}`;
};

// Assuming current time zone is PST
const currentDate = new Date(Date.now());
const currentTime = `${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

module.exports = {
  currentDate,
  currentTime,
};
