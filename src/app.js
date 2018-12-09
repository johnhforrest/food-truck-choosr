const getFoodTruckJson = require('./get-food-truck-json');
const createSoqlQuery = require('./create-soql-query');
const paginatedPrint = require('./paginated-print');

const uri = `http://data.sfgov.org/resource/bbb8-hzi6.json?${createSoqlQuery()}`;

getFoodTruckJson(uri)
  .then(paginatedPrint)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
  });
