function checklength(str, value) {
  return (str.length > value) ? `${str.slice(0, value - 1)}…` : str;
}

module.exports = checklength;
