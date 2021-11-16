function createObjectCopy(obj) {
  const clone = {};

  return Object.assign(clone, obj);
}

module.exports = createObjectCopy;
