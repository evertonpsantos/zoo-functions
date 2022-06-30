const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstUnder = employees.find((employee) => employee.id === id).responsibleFor[0];
  const found = species.find((element) => element.id === firstUnder).residents
    .reduce((acc, curr) => {
      if (curr.age > acc.age) return curr;
      return acc;
    });
  return Object.values(found);
}

module.exports = getOldestFromFirstSpecies;
