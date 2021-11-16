function filterAnalogue(array, callback) {
  const output = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      output.push(array[i]);
    }
  }

  return output;
}
module.exports = filterAnalogue;
