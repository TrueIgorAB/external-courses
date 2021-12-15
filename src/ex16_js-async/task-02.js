const input = document.getElementById('input');

const duplicate = document.getElementById('duplicate');

duplicate.style.position = 'relative';
duplicate.style.left = '70px';

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

function copy() {
  duplicate.innerHTML = input.value;
}

input.addEventListener('keyup', debounce(copy, 1000));

module.exports = debounce;
