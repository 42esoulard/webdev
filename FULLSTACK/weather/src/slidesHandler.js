export { slidesHandler };

const slidesHandler = () => {
  const btnPrev = document.querySelector("div[class='btn'][id='prev']");
  const btnNext = document.querySelector("div[class='btn'][id='next']");
  let curIndex = "0";

  btnPrev.addEventListener("click", prevSlide);
  btnNext.addEventListener("click", nextSlide);

  function prevSlide() {
    if (Number(curIndex) - 1 < 0) {
      showSlide(top.nbOfTimestamps - 1);
    } else {
      showSlide(Number(curIndex) - 1);
    }
  }

  function nextSlide() {
    if (Number(curIndex) + 1 >= top.nbOfTimestamps) {
      showSlide(0);
    } else {
      showSlide(Number(curIndex) + 1);
    }
  }

  function showSlide(index) {
    const curSlide = document.querySelector(`div[id='ts${curIndex}']`);
    curSlide.classList.remove("timestampActive");
    const newSlide = document.querySelector(`div[id='ts${index}']`);
    newSlide.classList.add("timestampActive");
    curIndex = index;
  }
};
