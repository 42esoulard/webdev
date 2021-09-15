export { gifHandler };

const GIF_API_KEY = "awFIIMXBJi4m2h9xT5SThroWFRgPLVvl";
const GIF_BASE_URL = `https://api.giphy.com/v1/gifs/translate?api_key=${GIF_API_KEY}`;
const SLOTH = "sloth";
const ERROR_IMG = "./error.jpg";

const gifHandler = (() => {
  const loader = document.querySelector("div[id='loaderGif']");
  const img = document.querySelector("img[class='gif']");
  const imgDetail = document.querySelector("figcaption[class='imgDetail']");

  async function setGif() {
    try {
      loader.classList.add("loaderActive");
      const response = await fetch(`${GIF_BASE_URL}&s=${SLOTH}`, {
        mode: "cors",
      });
      const imgData = await response.json();
      img.src = imgData.data.images.downsized_large.url;
      imgDetail.textContent = "";
      imgDetail.display = "none";
    } catch (err) {
      img.src = ERROR_IMG;
      imgDetail.style.display = "block";
      console.error(err);
    }
    img.addEventListener(
      "load",
      () => {
        loader.classList.remove("loaderActive");
      },
      { once: true }
    );
  }

  return {
    setGif,
  };
})();
