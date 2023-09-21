const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

slideMove(slides);

btnNext.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slideMove(slides);
});

btnPrev.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 1;
  } else {
    currentSlide--;
  }

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    const move = (index - currentSlide + maxSlideCount) % maxSlideCount;
    const opacity = move === 0 ? 1 : 0;
    slide.style.transform = `translateX(${move * 0}%)`;
    slide.style.opacity = opacity;
  });
}
