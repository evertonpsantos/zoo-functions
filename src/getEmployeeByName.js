const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
