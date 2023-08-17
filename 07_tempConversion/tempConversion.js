const convertToCelsius = function(fahr) {
  return Math.round(10 * ((fahr - 32) * (5 / 9))) / 10;
};

const convertToFahrenheit = function(cel) {
  return Math.round(10 * ((cel * (9 / 5) + 32))) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
