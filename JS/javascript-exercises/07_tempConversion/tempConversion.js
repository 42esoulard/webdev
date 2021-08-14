//Fahrenheit to Celsius	5/9(°F - 32)
const ftoc = function(farenheit) {
  if (arguments.length !== 1 || typeof(arguments[0]) !== 'number')
    return 'ERROR';
  let celsius = 5/9 * (farenheit - 32);
  if (celsius % 1 !== 0)
    celsius = +celsius.toFixed(1);
  return celsius;
};

//Celsius to Fahrenheit	(9/5 × °C) + 32
const ctof = function(celsius) {
  if (arguments.length !== 1 || typeof(arguments[0]) !== 'number')
    return 'ERROR';
  let farenheit = (9 / 5 * celsius) + 32;
  if (farenheit % 1 !== 0)
    farenheit = +farenheit.toFixed(1);
  return farenheit;
};

module.exports = {
  ftoc,
  ctof
};
