const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) acc.child += 1;
    if (curr.age >= 18 && curr.age < 50) acc.adult += 1;
    if (curr.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculate(param) {
  const counted = countEntrants(param);
  let sum = 0;
  if (Object.keys(counted).includes('child')) sum += (child * counted.child);
  if (Object.keys(counted).includes('adult')) sum += (adult * counted.adult);
  if (Object.keys(counted).includes('senior')) sum += (senior * counted.senior);
  return sum;
}

function calculateEntry(param) {
  if (!param || Object.keys(param).length === 0) return 0;
  return calculate(param);
}

module.exports = { calculateEntry, countEntrants };
