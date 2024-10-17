const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
  array = []
	for (i = 0; i < b; i++) {
    array.push(a)
  }
  return array.reduce((total, current) => total * current)
};

const factorial = function(a) {
	array = []
  if (a === 0) {return 1}
  else{
    for (i = 1; i < (a + 1); i++) {
    array.push(i)
  }}
	return array.reduce((total, current) => total * current, 1)
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
