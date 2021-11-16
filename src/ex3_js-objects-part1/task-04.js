function createNewKey(key, obj) {
  const newObj = {};

  Object.assign(newObj, obj);

  if (!obj.hasOwnProperty(key)) {
    newObj[key] = 'new';
  }

  return newObj;
}

module.exports = createNewKey;
