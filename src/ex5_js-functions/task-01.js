function Calculator() {
  let result = 0;

  return {
    add: function add(value) {
      result += typeof (value) === 'number' ? value : 0;

      return add;
    },

    subtract: function subtract(value) {
      result -= typeof (value) === 'number' ? value : 0;

      return subtract;
    },

    divide: function divide(value) {
      result /= typeof (value) === 'number' ? value : 1;

      return divide;
    },

    multiply: function multiply(value) {
      result *= typeof (value) === 'number' ? value : 1;

      return multiply;
    },

    getResult() {
      return result;
    },

    reset() {
      result = 0;

      return result;
    },
  };
}

module.exports = Calculator;
