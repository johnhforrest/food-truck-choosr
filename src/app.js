const requestPromise = require('request-promise');

// @TODO: Add pagination
// @TODO: Clean up code
// @TODO: Better output formatting

function padNumber(value) {
  return value >= 10
    ? value
    : `0${value}`;
}

const currentDate = new Date(Date.now());
const currentTime = `${padNumber(currentDate.getHours())}:${padNumber(currentDate.getMinutes())}`;

const query = {
  dayorder: {
    condition: '=',
    value: currentDate.getDay(),
  },
  start24: {
    condition: '<=',
    value: currentTime,
  },
  end24: {
    condition: '>=',
    value: currentTime,
  },
};

let sodaQuery = '';

Object.keys(query).forEach((key) => {
  sodaQuery += `${key} ${query[key].condition} '${query[key].value}' AND `;
});

sodaQuery = `$where=${encodeURIComponent(sodaQuery.slice(0, -5))}`;

console.log(sodaQuery);

function printResults(openTrucks) {
  console.log('NAME\t\t\tADDRESS');

  openTrucks.forEach((truck) => {
    console.log(`${truck.applicant}\t\t\t${truck.location}`);
  });
}

requestPromise({
  uri: `http://data.sfgov.org/resource/bbb8-hzi6.json?${sodaQuery}`,
  jdson: true,
})
  .then((resultsJson) => {
    // Parse the JSON
    const results = JSON.parse(resultsJson);

    // Sort them alphabetically by name
    const openTrucks = results.sort((a, b) => {
      const applicantA = a.applicant.toUpperCase();
      const applicantB = b.applicant.toUpperCase();

      if (applicantA < applicantB) return -1;
      if (applicantA > applicantB) return 1;
      return 0;
    });

    printResults(openTrucks);
  })
  .catch((error) => {
    console.log(error);
  });
