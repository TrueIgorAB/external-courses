function createDeepClone(obj) {
  const copy = {};

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      copy[key] = obj[key].map(createDeepClone);
    } else if (typeof obj[key] === 'object') {
      copy[key] = createDeepClone(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  });

  return copy;
}

module.exports = createDeepClone;
