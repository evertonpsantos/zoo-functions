const data = require('../data/zoo_data');

const { species } = data;

function noFilterAnimals(param) {
  return species.filter(({ location }) => location === param);
}

const animalsNE = noFilterAnimals('NE');
const animalsNW = noFilterAnimals('NW');
const animalsSE = noFilterAnimals('SE');
const animalsSW = noFilterAnimals('SW');

function includeNames() {
  return {
    NE: animalsNE.map((animal) => ({ [animal.name]: animal.residents
      .map((element) => element.name) })),
    NW: animalsNW.map((animal) => ({ [animal.name]: animal.residents
      .map((element) => element.name) })),
    SE: animalsSE.map((animal) => ({ [animal.name]: animal.residents
      .map((element) => element.name) })),
    SW: animalsSW.map((animal) => ({ [animal.name]: animal.residents
      .map((element) => element.name) })),
  };
}

function sorted() {
  return {
    NE: animalsNE.map((animal) => ({ [animal.name]: animal.residents.map((xzibit) => xzibit.name)
      .sort() })),
    NW: animalsNW.map((animal) => ({ [animal.name]: animal.residents.map((xzibit) => xzibit.name)
      .sort() })),
    SE: animalsSE.map((animal) => ({ [animal.name]: animal.residents.map((xzibit) => xzibit.name)
      .sort() })),
    SW: animalsSW.map((animal) => ({ [animal.name]: animal.residents.map((xzibit) => xzibit.name)
      .sort() })),
  };
}

function bySex(options) {
  return {
    NE: animalsNE.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name) })),
    NW: animalsNW.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name) })),
    SE: animalsSE.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name) })),
    SW: animalsSW.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name) })),
  };
}

function bySexSorted(options) {
  return {
    NE: animalsNE.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name).sort() })),
    NW: animalsNW.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name).sort() })),
    SE: animalsSE.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name).sort() })),
    SW: animalsSW.map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((element) => element.name).sort() })),
  };
}

function noFilter() {
  return {
    NE: animalsNE.map((element) => element.name),
    NW: animalsNW.map((element) => element.name),
    SE: animalsSE.map((element) => element.name),
    SW: animalsSW.map((element) => element.name),
  };
}

function aux(param) {
  if (param.sorted && param.sex) return bySexSorted(param);
  if (param.sex) return bySex(param);
  if (param.sorted) return sorted();
  return includeNames();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noFilter();
  return aux(options);
}

module.exports = getAnimalMap;
