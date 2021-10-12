function getRandomInt() {
  const minInt = 0;

  const maxInt = 100;

  const rand = minInt + Math.random() * (maxInt + 1 - minInt);

  return Math.floor(rand);
}

module.exports = getRandomInt;
