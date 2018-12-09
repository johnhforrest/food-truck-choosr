function padNumber(value) {
  return value >= 10
    ? value
    : `0${value}`;
}

const createSoqlQuery = () => {
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

  let soqlQuery = '';

  Object.keys(query).forEach((key) => {
    soqlQuery += `${key} ${query[key].condition} '${query[key].value}' AND `;
  });

  soqlQuery = `$where=${encodeURIComponent(soqlQuery.slice(0, -5))}`;

  return soqlQuery;
};

module.exports = createSoqlQuery;
