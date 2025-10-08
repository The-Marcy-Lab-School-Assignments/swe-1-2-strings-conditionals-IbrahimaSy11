const measureRainSwitch = (inches) => {
  switch (true) {
    case inches === 0:
      return 'drought';
    case inches < 2:
      return 'dry';
    case inches < 4:
      return 'average';
    case inches < 6:
      return 'rainy';
    default:
      return 'flood';
  }
};

const rounderSwitch = (float, roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);
    case 'down':
      return Math.floor(float);
    case 'honest':
      return Math.round(float);
    default:
      return 'Invalid rounding setting';
  }
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};