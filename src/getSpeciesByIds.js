const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids.map((id) => species.find((animal) => animal.id === id));
}

module.exports = getSpeciesByIds;
