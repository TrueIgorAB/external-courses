const Calculator = {
    result: 0,
  
    add(value) {
      this.result += typeof value === 'number' ? value : 0;
  
      return this;
    },
  
    substract(value) {
      this.result -= typeof value === 'number' ? value : 0;
  
      return this;
    },
  
    divide(value) {
      this.result /= typeof value === 'number' ? value : 1;
  
      return this;
    },
  
    multiply(value) {
      this.result *= typeof value === 'number' ? value : 1;
  
      return this;
    },
  
    getResult() {
      setTimeout(() => this.result, 7000);
    },
  
    reset() {
      this.result = 0;
  
      return this;
    },
  
    setState(value) {
      this.result = value;
  
      return this.result;
    },
  
    fetchData(callback) {
      const calc = this;
  
      setTimeout(() => {
        calc.result = this;
        callback(calc.result);
      }, 1000);
    },
  };
  
  const calculator = Calculator.add(100);
  
  calculator.setState(1);
  