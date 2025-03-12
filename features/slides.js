let slideIndex = 0;
let slideInterval;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  slideInterval = setTimeout(showSlides, 3000); // Auto change every 3s
}

function changeSlide(n) {
  clearTimeout(slideInterval);
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  clearTimeout(slideInterval);
  slideIndex = n - 1;
  showSlides();
}

showSlides();
