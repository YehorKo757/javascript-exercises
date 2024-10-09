const convertToCelsius = function(temperature) {
  return Math.round(10 * (temperature - 32) * 5 / 9) / 10;
};

const convertToFahrenheit = function(temperature) {
  return Math.round(10 * (temperature * 9 / 5 +32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
