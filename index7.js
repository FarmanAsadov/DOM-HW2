const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const slides = document.querySelectorAll(".slide");

let currentSlide = -1;

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
  if (currentSlide === maxSlideCount - 1) {
    currentSlide = 0;
  } else {
    currentSlide--;
  }
  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    const move = (index - currentSlide + maxSlideCount) % maxSlideCount;
    const opacity = move === 1 ? 1 : 0.4;
    const scale = move === 1 ? 1 : 0.95;
    slide.style.transform = `translateX(${move * 105}%) scale(${scale})`;
    slide.style.opacity = opacity;
  });
}
