function mapAnalogue(array, callback) {
  const newArray = [];

  array.forEach((item, i, arr) => newArray.push(callback(item, i, arr)));

  return newArray;
}

module.exports = mapAnalogue;
