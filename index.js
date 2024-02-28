const addDays = require("date-fns/addDays");

function addingDays(days) {
  const date = addDays(new Date(2020, 7, 22), days);
  const result = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return result;
}

module.exports = addingDays;
