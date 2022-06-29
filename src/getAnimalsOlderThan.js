const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.reduce((acc, curr) => {
    if (curr.name === animal) return curr.residents;
    return acc;
  }).every((eachAnimal) => eachAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
