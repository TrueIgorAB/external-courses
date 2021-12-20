function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function add(value) {
  this.result += typeof value === 'number' ? value : 0;

  return this;
};

Calculator.prototype.substract = function substract(value) {
  this.result -= typeof value === 'number' ? value : 0;

  return this;
};

Calculator.prototype.divide = function divide(value) {
  this.result /= typeof value === 'number' ? value : 1;

  return this;
};

Calculator.prototype.multiply = function multiply(value) {
  this.result *= typeof value === 'number' ? value : 1;

  return this;
};

Calculator.prototype.getResult = function getResult() {
  setTimeout(() => this.result, 7000);
};

Calculator.prototype.reset = function reset() {
  this.result = 0;

  return this;
};

Calculator.prototype.setState = function setState(value) {
  this.result = value;

  return this.result;
};

Calculator.prototype.fetchData = function fetchData(callback) {
  const calc = this;

  setTimeout(() => {
    calc.result = this;
    callback(calc.result);
  }, 1000);
};

module.exports = Calculator;
