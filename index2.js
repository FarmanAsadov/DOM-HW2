const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

slideMove(slides);

nextBtn.addEventListener("click", () => {
  if (currentSlide === maxSlideCount - 3) {
    currentSlide = 0;
  } else {
    currentSlide += 3;
  }
  slideMove(slides);
});

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlideCount - 3;
  } else {
    currentSlide -= 3;
  }
  console.log(currentSlide);

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      ((index - currentSlide + maxSlideCount) % maxSlideCount) * 112
    }%)`;
  });
}

const li_p = document.querySelectorAll(".li-points");
li_p.forEach((item, index) => {
  item.addEventListener("click", () => {
    let a = index;
    a *= 3;
    currentSlide = a;
    slideMove(slides);
  });
});
