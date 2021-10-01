function getType(value) {
  if (Number.isNaN(value)) {
    return undefined;
  }

  if (typeof (value) === 'number') {
    return 'number';
  }

  if (typeof (value) === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = getType;
