 const body = document.querySelector("body");

 const IMG_NUMBER = 5;

 function getRandom() {
     const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
     return number;
 }

function paintImage(imgNumber) {
    const image = new Image();

    image.src = `./img/img${imgNumber}.png`;

    image.classList.add("bgImage");

    body.appendChild(image);
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();