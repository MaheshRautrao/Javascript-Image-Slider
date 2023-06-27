const image_container = document.querySelector(".image-container");
const prev = document.querySelector(".button_left");
const next = document.querySelector(".button_right");

const photos = ["image", "image2", "image3"];
let counter = 0;

prev.addEventListener("click", slidePrev);
next.addEventListener("click", slideNext);

let image = photos[counter];

function setImage() {
  image_container.style.background = `no-repeat fixed center url("assets/${photos[counter]}.avif")`;
}

function slidePrev() {
  counter--;
  if (counter < 0) counter = photos.length - 1;
  setImage();
}
function slideNext() {
  counter++;
  counter = counter % photos.length;
  setImage();
}
