const coolnessGauge = (numOfFridges) => {
  return numOfFridges >= 4 ? 'You are downright chilly!' : 'You need more fridges.';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) return 'No pops? Maybe try one.';
  if (numOfFunkoPops <= 10) return 'Only a few? Keep having fun!';
  if (numOfFunkoPops <= 20) return 'You have a problem.';
  if (numOfFunkoPops <= 30) return 'You need help!';
  return 'You need an intervention!!!';
};

const returnPositiveNegativeZero = (num) => {
  return ['Negative', 'Zero', 'Positive'][Math.sign(num) + 1];
};

module.exports = {
  coolnessGauge,
  funkoPopAddictionLevel,
  returnPositiveNegativeZero,
};
