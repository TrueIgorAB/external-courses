function analyzeElementsArr(array) {
  let evenNum = 0;

  let oddNum = 0;

  let zeroNum = 0;

  array.forEach((item) => {
    if (typeof (item) === 'number') {
      if (!(item % 2) && item !== 0) {
        evenNum += 1;
      } else if (item % 2) {
        oddNum += 1;
      } else if (item === 0) {
        zeroNum += 1;
      }
    }
  });

  console.log(`Количество чётных элементов: ${evenNum}, нечётных: ${oddNum}`);

  console.log(`Количество нулей: ${zeroNum}`);

  return [evenNum, oddNum, zeroNum];
}

module.exports = analyzeElementsArr;
