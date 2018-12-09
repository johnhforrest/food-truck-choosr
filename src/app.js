const getFoodTruckJson = require('./get-food-truck-json');
const createSoqlQuery = require('./create-soql-query');
const paginatedPrint = require('./paginated-print');

// @TODO: Add pagination
// @TODO: Clean up code
// @TODO: Better output formatting
// @TODO: Validate the time comparison and fix the 00:00 edge case

const uri = `http://data.sfgov.org/resource/bbb8-hzi6.json?${createSoqlQuery()}`;

getFoodTruckJson(uri)
  .then(paginatedPrint)
  .catch((error) => {
    console.log(error);
  });
