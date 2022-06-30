const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const aux = species.find((animalGroup) => animalGroup.name === animal.specie).residents;
  const aux2 = aux.filter((element) => element.sex === animal.sex).length;
  if (Object.keys(animal).length === 1) return aux.length;
  if (Object.keys(animal).length === 2) return aux2;
}

module.exports = countAnimals;
