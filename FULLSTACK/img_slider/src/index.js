import './style.css'

let currentSlide = 0;
const slides = Array.from(document.querySelectorAll('img'));
const dots = Array.from(document.querySelectorAll('span[class=\'dot\']'));

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    clearTimeout(timeout);
    currentSlide = i - 1;
    nextSlide();
  })
}

let timeout;

const btnPrev = document.querySelector('div[id=\'prev\']');
const btnNext = document.querySelector('div[id=\'next\']');

function nextSlide() {
  ++currentSlide;
  showSlide();
}

btnPrev.addEventListener('click', function() {
  clearTimeout(timeout);
  currentSlide -= 1;
  showSlide();
})
btnNext.addEventListener('click', function() {
  clearTimeout(timeout);
  nextSlide();
})

function showSlide() {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  if (currentSlide >= slides.length)
    currentSlide = 0;
  if (currentSlide < 0)
    currentSlide += slides.length;
  dots[currentSlide].classList.add('active');
  slides[currentSlide].style.display = "block";

  timeout = setTimeout(nextSlide, 5000);
}

showSlide();