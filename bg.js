const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const num = Math.floor(Math.random() * IMG_NUMBER);
  //console.log(num)
  return num;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
