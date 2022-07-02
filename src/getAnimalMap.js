const data = require('../data/zoo_data');

const { species } = data;

const locationsArray = ['NE', 'NW', 'SE', 'SW'];

function noFilterAnimals(param) {
  return species.filter(({ location }) => location === param);
}

function includeNames() {
  const obj = {};
  locationsArray.forEach((element) => {
    (obj[element] = noFilterAnimals(element).map((animal) => ({ [animal.name]: animal.residents
      .map((e) => e.name) })));
  });
  return obj;
}

function sorted() {
  const obj = {};
  locationsArray.forEach((element) => {
    (obj[element] = noFilterAnimals(element).map((animal) => ({ [animal.name]: animal.residents
      .map((e) => e.name).sort() })));
  });
  return obj;
}

function bySex(options) {
  const obj = {};
  locationsArray.forEach((element) => {
    (obj[element] = noFilterAnimals(element).map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((e) => e.name) })));
  });
  return obj;
}

function bySexSorted(options) {
  const obj = {};
  locationsArray.forEach((element) => {
    (obj[element] = noFilterAnimals(element).map((animal) => ({ [animal.name]: animal.residents
      .filter((xzibit) => xzibit.sex === options.sex).map((e) => e.name).sort() })));
  });
  return obj;
}

function noFilter() {
  const obj = {};
  locationsArray.forEach((element) => {
    (obj[element] = noFilterAnimals(element).map((e) => e.name));
  });
  return obj;
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
