function insertWord(str, word, index) {
  const arr = str.split(' ');

  arr.splice(index + 1, 0, word);

  return arr.join(' ');
}

module.exports = insertWord;
