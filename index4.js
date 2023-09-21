const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlideCount = slides.length;

reloadWindow();
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
  console.log(currentSlide);

  slideMove(slides);
});

function slideMove(slides) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      ((index - currentSlide + maxSlideCount) % maxSlideCount) * 95
    }%)`;
  });
}

function reloadWindow() {
  const t = document.querySelectorAll(".textt");
  t.forEach((a) => {
    var r = Math.floor(Math.random() * 50) + 45;
    a.style = ("style", `width: ${r}%; margin: 0 10px`);
    a.innerHTML = `${r}%`;
    console.log(a);
  });
}

const li_p = document.querySelectorAll(".li-points");
li_p.forEach((item, index) => {
  item.addEventListener("click", () => {
    let a = index;
    a *= 1;
    currentSlide = a;
    slideMove(slides);
  });
});
