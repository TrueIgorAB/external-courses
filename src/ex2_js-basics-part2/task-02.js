function showElementArr(array) {
  array.forEach((item) => {
    console.log(`Элемент: ${item}`);
  });

  console.log(`Общее количество элементов в массиве: ${array.length}`);

  return undefined;
}

module.exports = showElementArr;
