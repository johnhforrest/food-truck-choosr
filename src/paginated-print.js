const paginatedPrint = (openTrucks) => {
  console.log('NAME\t\t\tADDRESS');

  openTrucks.forEach((truck) => {
    console.log(`${truck.applicant}\t\t\t${truck.location}`);
  });
};

module.exports = paginatedPrint;
