const data = require('../data/zoo_data');

const { employees, species } = data;

const employeeId = employees.map((ids) => ids.id);
const employeeFirstName = employees.map(({ firstName }) => `${firstName}`);
const employeeLastName = employees.map(({ lastName }) => `${lastName}`);

function getSpeciesByName(param) {
  const responsibleFor = employees.filter(({ firstName, lastName }) =>
    (firstName === param.name || lastName === param.name))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((animal) => species.reduce((acc, curr) => {
    if (curr.id === animal) return curr.name;
    return acc;
  }));
}

function getIdByName(param) {
  return employees.find(({ firstName, lastName }) =>
    (firstName === param.name || lastName === param.name)).id;
}

function getName(param) {
  const employe = employees.find(({ firstName, lastName }) =>
    (firstName === param.name || lastName === param.name));
  return `${employe.firstName} ${employe.lastName}`;
}

function getLocationByName(param) {
  const responsibleFor = employees.filter(({ firstName, lastName }) =>
    (firstName === param.name || lastName === param.name))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((animal) => species.reduce((acc, curr) => {
    if (curr.id === animal) return curr.location;
    return acc;
  }));
}

function getSpeciesById(param) {
  const responsibleFor = employees.filter((employee) => (employee.id === param.id))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((element) => species.reduce((acc, curr) => {
    if (curr.id === element) return curr.name;
    return acc;
  }));
}

function getIdById(param) {
  return employees.find((employee) => employee.id === param.id).id;
}

function getNameById(param) {
  const employe = employees.find((employee) => employee.id === param.id);
  return `${employe.firstName} ${employe.lastName}`;
}

function getLocationById(param) {
  const responsibleFor = employees.filter((employee) => (employee.id === param.id))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((exhibit) => species.reduce((acc, curr) => {
    if (curr.id === exhibit) return curr.location;
    return acc;
  }));
}

function returnIdObj(param) {
  if (!employeeId.includes(param.id)) throw new Error('Informações inválidas');
  return { id: getIdById(param),
    fullName: getNameById(param),
    species: getSpeciesById(param),
    locations: getLocationById(param),
  };
}

function returnNameObj(param) {
  const message = 'Informações inválidas';
  if (employeeFirstName.includes(param.name) || employeeLastName.includes(param.name)) {
    return {
      id: getIdByName(param),
      fullName: getName(param),
      species: getSpeciesByName(param),
      locations: getLocationByName(param),
    };
  }
  throw new Error(message);
}

function getSpeciesDefault(param) {
  const responsibleFor = employees.filter((employee) => (employee.id === param))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((elementDefault) => species.reduce((acc, curr, index) => {
    if (curr.id === elementDefault) return curr.name;
    return acc;
  }, 0));
}

function getLocationDefault(param) {
  const responsibleFor = employees.filter((employee) => (employee.id === param))
    .map((curr) => curr.responsibleFor)[0];
  return responsibleFor.map((xzibit) => species.reduce((acc, curr) => {
    if (curr.id === xzibit) return curr.location;
    return acc;
  }, 0));
}

function defaultObj() {
  return employees.map(({ id, firstName, lastName }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpeciesDefault(id),
    locations: getLocationDefault(id),
  }));
}

function getEmployeesCoverage(param) {
  if (!param) return defaultObj();
  if (Object.keys(param).includes('id')) return returnIdObj(param);
  if (Object.keys(param).includes('name')) return returnNameObj(param);
}

module.exports = getEmployeesCoverage;
