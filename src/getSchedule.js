const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;
const animales = species.map((element) => element.name);

function animalAvailability(param) {
  return species.find((animal) => animal.name === param).availability;
}

function createObj() {
  return {
    Tuesday: {
      officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Tuesday')).map((animal) => animal.name),
    },
    Wednesday: {
      officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Wednesday')).map((animal) => animal.name),
    },
  };
}

function createObj2() {
  return {
    Thursday: {
      officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Thursday')).map((animal) => animal.name),
    },
    Friday: {
      officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Friday')).map((animal) => animal.name),
    },
  };
}

function createObj3() {
  return {
    Saturday: {
      officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Saturday')).map((animal) => animal.name),
    },
    Sunday: {
      officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
      exhibition: species.filter((animal) => animal.availability
        .includes('Sunday')).map((animal) => animal.name),
    },
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

const completeObj = { ...createObj(), ...createObj2(), ...createObj3() };
const weekDays = Object.keys(completeObj);
const daysAndAnimals = [...weekDays, ...animales];

function getDaySchedule(param) {
  return {
    [param]: completeObj[param],
  };
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return completeObj;
  if (animales.includes(scheduleTarget)) return animalAvailability(scheduleTarget);
  if (weekDays.includes(scheduleTarget)) return getDaySchedule(scheduleTarget);
  return completeObj;
}

// console.log(daysAndAnimals);

module.exports = getSchedule;
