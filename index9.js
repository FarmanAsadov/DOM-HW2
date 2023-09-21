const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

const maxSlideCount = slides.length;

slideMove(slides);

nextBtn.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideMove(slides);
});

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 1;
  } else {
    currentSlide--;
  }
  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      ((index - currentSlide + maxSlideCount) % maxSlideCount) * 105
    }%)`;
  });
}

function autoPlay() {
  if (currentSlide === maxSlideCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideMove(slides);
}

nextBtn.addEventListener("click", autoPlay);
setInterval(autoPlay, 2000);
