function createObjWithoutPrototype() {
  const user = Object.create(null);

  return user;
}

module.exports = createObjWithoutPrototype;
