
//ignore the inverted parameter names...i mixed them up the first time and i'm not fixing it
const convertToCelsius = function(celsius) {
  let celsiusConverted = ((celsius-32) * (5/9));
  fahrResult = round(celsiusConverted, 1)
  return fahrResult
};

const convertToFahrenheit = function(fahr) {
  let fahrConverted = ((fahr * (9/5)) + 32);
  let celsiusResult = round(fahrConverted, 1)
  return celsiusResult
};

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
