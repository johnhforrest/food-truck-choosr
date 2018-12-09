const requestPromise = require('request-promise');

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
  }).then(sortTrucks);
};

module.exports = getFoodTruckJson;
