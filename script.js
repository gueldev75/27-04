document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("slideshow-container").classList.remove("hidden");
    document.getElementById("music").play();
});

const images = ["assets/kaneki1.png", "assets/kaneki2.png", "assets/kaneki3.png"];
const descriptions = ["Eu", "te", "amo"];
let index = 0;

function changeSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slide-image").src = images[index];
    document.getElementById("description").textContent = descriptions[index];
}

setInterval(changeSlide, 3000);