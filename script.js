const bgImg = document.querySelector(".bg-img");
window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {

    bgImg.style.opacity = 1 - window.pageYOffset / 900;
    bgImg.style.backgroundSize = 100 - window.pageYOffset / 12 + "%";
}