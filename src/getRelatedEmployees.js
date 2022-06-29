const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let managerTruthiness = false;
  employees.forEach(({ managers }) => {
    if (managers.some((element) => element === id)) managerTruthiness = true;
  });
  return managerTruthiness;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => (employee.managers.includes(managerId)))
    .map((person) => `${person.firstName} ${person.lastName}`);
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
