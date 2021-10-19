function sliceAnalogue(array, begin, end) {
  const newArray = [];

  let begining = begin || 0;

  let ending = end || array.length;

  if (begining < 0) {
    begining = array.length + begin;
  }

  if (ending < 0) {
    ending = array.length + end;
  }

  array.forEach((value, index) => {
    if (index >= begining && index < ending) {
      newArray.push(value);
    }
  });

  return newArray;
}

module.exports = sliceAnalogue;
