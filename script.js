const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
let isTransitioning = false;

function moveToNextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  carouselInner.style.transition = "transform 1s ease";
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

  if (currentIndex === carouselItems.length) {
    currentIndex = 0;
    setTimeout(() => {
      carouselInner.style.transition = "none";
      carouselInner.style.transform = `translateX(0)`;
      setTimeout(() => {
        carouselInner.style.transition = "transform 1s ease";
        isTransitioning = false;
      }, 50);
    }, 1000);
  } else {
    isTransitioning = false;
  }
}

setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
