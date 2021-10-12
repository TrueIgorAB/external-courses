function deleteFirstAndLastWhitespace(str) {
  const spacesIndex = [];

  const newString = str.split('');

  newString.forEach((item, index) => {
    if (item === ' ') {
      spacesIndex.push(index);
    }
  });

  const firstSpace = Math.min(...spacesIndex);

  const lastSpace = Math.max(...spacesIndex) - 1;

  newString.splice(firstSpace, 1);

  newString.splice(lastSpace, 1);

  return newString.join('');
}

module.exports = deleteFirstAndLastWhitespace;
