function getWithFirstLetterCaseInEveryWord(str) {
  return str.split(' ').map((s) => s[0].toUpperCase() + s.slice(1)).join(' ');
}

module.exports = getWithFirstLetterCaseInEveryWord;
