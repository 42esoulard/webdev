export { searchHandler };

import { dataHandler } from "./dataHandler";

const searchHandler = (() => {
  let validSearch = false;

  const searchInput = document.querySelector("input[class='search']");
  searchInput.addEventListener("input", parseSearchInput);

  function cityNotFound() {
    searchInput.setCustomValidity("City not found :(");
    searchInput.reportValidity();
  }

  function parseSearchInput() {
    if (
      searchInput.value === "" ||
      searchInput.validity.typeMismatch ||
      searchInput.validity.tooLong ||
      searchInput.validity.tooShort ||
      !/^[-a-zA-Z ]*$/.test(searchInput.value)
    ) {
      searchInput.setCustomValidity(
        "Please enter a city name (alphabetical characters, spaces and dash)"
      );
      searchInput.classList.add("invalid");
      searchInput.reportValidity();
      validSearch = false;
      return;
    }
    searchInput.setCustomValidity("");
    searchInput.classList.remove("invalid");
    validSearch = true;
  }

  const radioDefaultLabel = document.querySelector(`label[id='left']`);
  radioDefaultLabel.classList.add("radioActive");

  const radiosUnit = document.querySelectorAll("input[type='radio']");
  radiosUnit.forEach((radio) =>
    radio.addEventListener("input", switchActiveRadio)
  );

  function switchActiveRadio() {
    radiosUnit.forEach((radio) => {
      const radioLabel = document.querySelector(`label[id='${radio.id}']`);
      if (radio.checked) {
        top.unit = radio.value;
        radioLabel.classList.add("radioActive");
      } else {
        radioLabel.classList.remove("radioActive");
      }
    });
  }

  const searchButton = document.querySelector("img[class='searchIcon']");
  searchButton.addEventListener("click", setSearchedValues);

  function setSearchedValues() {
    parseSearchInput();
    if (!validSearch) return;

    top.city = searchInput.value;
    dataHandler.getData();
  }
  return {
    cityNotFound,
  };
})();
