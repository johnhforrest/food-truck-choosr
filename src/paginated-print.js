const { currentDay, currentTime } = require('./get-date-time');

// Key press code adapted from: https://stackoverflow.com/questions/19687407/press-any-key-to-continue-in-nodejs
const waitForKeyPress = async () => {
  console.log('Press any key to display the next page of results or Ctrl+C to quit.');
  process.stdin.setRawMode(true);

  return new Promise((resolve) => {
    return process.stdin.once('data', (data) => {
      const byteArray = [...data];

      if (byteArray.length > 0 && byteArray[0] === 3) {
        console.log('^C');
        process.exit(1);
      }

      process.stdin.setRawMode(false);
      resolve();
    });
  });
};

const getLongestNameLength = (results) => {
  return results.reduce((longestLength, truck) => {
    if (truck.applicant.length > longestLength) {
      return truck.applicant.length;
    }

    return longestLength;
  }, 0);
};

const paginatedPrint = async (openTrucks) => {
  const minSpaces = getLongestNameLength(openTrucks) + 10;


  for (let i = 0; i < openTrucks.length; i++) {
    console.clear();

    console.log('Food Truck Choosr');
    console.log(`${currentDay}, ${currentTime}`);
    console.log(`Page ${Math.floor(i / 10) + 1} of ${Math.floor(openTrucks.length / 10)}`);
    console.log(`${'\nNAME'.padEnd(minSpaces)}ADDRESS`);

    // Print up to 10 trucks
    let pageStart = i;
    const pageEnd = i + 10;
    for (; pageStart < pageEnd && pageStart < openTrucks.length; pageStart++, i++) {
      const truck = openTrucks[pageStart];
      console.log(`${truck.applicant.padEnd(minSpaces, '.')}${truck.location}`);
    }

    if (pageStart < openTrucks.length) {
      // eslint-disable-next-line no-await-in-loop
      await waitForKeyPress();
    }
  }
};

module.exports = paginatedPrint;
