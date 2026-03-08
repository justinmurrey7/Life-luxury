const slides = document.querySelectorAll(".ll-slide");
const dots = document.querySelectorAll(".ll-dot");
const prevBtn = document.querySelector(".ll-prev");
const nextBtn = document.querySelector(".ll-next");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
});

showSlide(0);
startAutoSlide();
