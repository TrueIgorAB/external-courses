function deleteFirstAndLastWhitespace(str) {
  const spacesIndex = [];

  const newString = str.split('');

  newString.forEach((item, index) => {
    if (item === ' ') {
      spacesIndex.push(index);
    }
  });

  newString.splice(spacesIndex[0], 1);

  newString.splice((spacesIndex[spacesIndex.length - 1] - 1), 1);

  return newString.join('');
}

module.exports = deleteFirstAndLastWhitespace;
