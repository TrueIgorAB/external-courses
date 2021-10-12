function createObjWithoutPrototype() {
  const user = {};

  user.__proto__ = null;

  return user;
}

module.exports = createObjWithoutPrototype;
