const add = function() {
	if (arguments.length < 2)
    return 'ERROR';
    
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof(arguments[i]) !== 'number')
      return 'ERROR';
    result += arguments[i];
  }
  return result;
};

const subtract = function() {
	if (arguments.length < 2 || typeof(arguments[0]) !== 'number')
    return 'ERROR';

  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (typeof(arguments[i]) !== 'number')
      return 'ERROR';
    result -= arguments[i];
  }
  return result;
};

const sum = function() {
	if (arguments.length !== 1 || typeof(arguments[0]) !== 'object')
    return 'ERROR';
    
  let result = 0;
  for (let i = 0; i < arguments[0].length; i++) {
    if (typeof(arguments[0][i]) !== 'number')
      return 'ERROR';
    result += arguments[0][i];
  }
  return result;
};

const multiply = function() {
  if (arguments.length !== 1 || typeof(arguments[0]) !== 'object' 
      || typeof(arguments[0][0]) !== 'number')
    return 'ERROR';
    
  let result = arguments[0][0];
  for (let i = 1; i < arguments[0].length; i++) {
    if (typeof(arguments[0][i]) !== 'number')
      return 'ERROR';
    result *= arguments[0][i];
  }
  return result;
};

const power = function() {
  if (arguments.length !== 2 || typeof(arguments[0]) !== 'number'
      || typeof(arguments[1]) !== 'number')
    return 'ERROR';
    
  let result = arguments[0];
  for (let i = 1; i < arguments[1]; i++)
    result *= arguments[0];
  return result;
};

const factorial = function() {
	if (arguments.length !== 1 || typeof(arguments[0]) !== 'number')
    return 'ERROR';
  if (arguments[0] === 0)
    return 1;
    
  let result = arguments[0];
  for (let i = arguments[0] - 1; i > 0; i--)
    result *= i;
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
