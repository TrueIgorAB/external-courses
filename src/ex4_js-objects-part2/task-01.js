function checkKeyInPrototype(key, obj) {
  if (!obj.hasOwnProperty(key)) {
    return obj[key];
  }

  return undefined;
}

module.exports = checkKeyInPrototype;
