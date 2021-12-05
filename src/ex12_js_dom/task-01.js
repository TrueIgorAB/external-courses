const images = [
  'asset\\cat-6762936__340.webp',
  'asset\\couple-6607143_960_720.webp',
  'asset\\leaves-5949884_960_720.webp',
  'asset\\lighthouse-6785763_960_720.webp',
  'asset\\skiing-6060431_960_720.webp',
  'asset\\technology-6801334_960_720.webp',
];
let index = 0;

const theImage = document.getElementById('img');
theImage.src = images[0];

function showImage(direction) {
  if (direction === 'left') {
    index -= 1;
    theImage.style.animation = '';
    setTimeout(() => {
      theImage.style.animation = 'leftAnim 1s linear';
    });
  } else {
    index += 1;
    theImage.style.animation = '';
    setTimeout(() => {
      theImage.style.animation = 'rightAnim 1s linear';
    });
  }

  if (index < 0) {
    index = images.length - 1;
  }

  if (index > images.length - 1) {
    index = 0;
  }
  theImage.src = images[index];
}

module.exports = showImage;
