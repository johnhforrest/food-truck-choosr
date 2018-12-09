const { currentDate } = require('./get-date-time');

const createSoqlQuery = () => {
  const query = {
    dayorder: {
      condition: '=',
      value: currentDate.getDay(),
    },
  };

  const soqlQueryParams = [];

  Object.keys(query).forEach((key) => {
    soqlQueryParams.push(`${key} ${query[key].condition} '${query[key].value}'`);
  });

  return `$where=${encodeURIComponent(soqlQueryParams.join(' AND '))}`;
};

module.exports = createSoqlQuery;
