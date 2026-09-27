const images = [
    "images/cat1.jpeg",
    "images/cat2.jpeg",
    "images/cat3.jpeg",
    "images/cat4.jpeg"
];

let currentImage = 0;

const catImage = document.getElementById("cat-image");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

nextButton.onclick = function () {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    catImage.src = images[currentImage];
};

previousButton.onclick = function () {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    catImage.src = images[currentImage];
};