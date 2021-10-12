function getLowerCamelCase(str) {
  const result = str.split(' ').map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase()).join('');

  return result[0].toLowerCase() + result.slice(1);
}

module.exports = getLowerCamelCase;
