function getEqualityElementOfArr(array) {
  const zeroElement = array[0];

  return array.every((item) => item === zeroElement);
}

module.exports = getEqualityElementOfArr;
