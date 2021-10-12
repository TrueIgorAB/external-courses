function showElementsInString(str) {
  const result = {};

  str.split('').forEach((c) => {
    if (result[c]) {
      result[c] += 1;
    } else {
      result[c] = 1;
    }
  });

  Object.keys(result).forEach((field) => console.log(`${field} : ${result[field]}`));
}

module.exports = showElementsInString;
