function reduceAnalogue(array, callback, initialValue) {
  const arr = array.slice();

  let previousValue = initialValue === undefined ? arr.shift() : initialValue;

  for (let i = 0; i < arr.length; i += 1) {
    previousValue = callback(previousValue, arr[i], i, arr);
  }

  return previousValue;
}

module.exports = reduceAnalogue;
