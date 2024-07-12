console.log("Welcome to my Gallery!");
console.log(document);

let currentIndex = 0;

const largeImage = document.getElementById("large-image");
const images = ["PH eagle.webp", "amore1.webp", "amore2.webp"];

const thumbnail1 = document.getElementById("thumbnail1");
thumbnail1.addEventListener("mouseover", function () {
  largeImage.src = images[0];
});

const thumbnail2 = document.getElementById("thumbnail2");
thumbnail2.addEventListener("mouseover", function () {
  thumbnail2;
  largeImage.src = images[1];
});

const thumbnail3 = document.getElementById("thumbnail3");
thumbnail3.addEventListener("mouseover", function () {
  thumbnail3;
  largeImage.src = images[2];
});

function nextBtn() {
  currentIndex++;
  largeImage.src = images[currentIndex];
}
document.getElementById("button-next").onclick = () => nextBtn();

function prevBtn() {
  currentIndex--;
  largeImage.src = images[currentIndex];
}
document.getElementById("button-previous").onclick = () => prevBtn();
