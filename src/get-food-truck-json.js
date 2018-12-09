const requestPromise = require('request-promise');
const { currentTime } = require('./get-date-time');

const removeClosedTrucks = (results) => {
  return results.filter((truck) => {
    // Trucks closing at midnight are a special case in string comparisons,
    // so we set them to 24:00 to make the comparisons cleaner.
    if (truck.end24 === '00:00') truck.end24 = '24:00';

    return truck.start24 <= currentTime && currentTime <= truck.end24;
  });
};

const sortTrucks = (results) => {
  // Sort them alphabetically by name
  return results.sort((a, b) => {
    const applicantA = a.applicant.toUpperCase();
    const applicantB = b.applicant.toUpperCase();

    if (applicantA < applicantB) return -1;
    if (applicantA > applicantB) return 1;
    return 0;
  });
};

const getFoodTruckJson = (uri) => {
  return requestPromise({
    uri,
    json: true,
  })
    .then(removeClosedTrucks)
    .then(sortTrucks);
};

module.exports = getFoodTruckJson;
