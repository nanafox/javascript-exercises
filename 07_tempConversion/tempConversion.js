const convertToCelsius = function (temperature) {
  return parseFloat(((5 / 9) * (temperature - 32)).toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  return parseFloat((temperature * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
