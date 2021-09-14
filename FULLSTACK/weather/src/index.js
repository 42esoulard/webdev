import "./style.css";
import { format, parseISO, fromUnixTime } from "date-fns";

const API_KEY = "f4aa4eb90aa3aa36c5685d8da7a26dff";
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const DEFAULT_CITY = "Paris";
const DEFAULT_UNIT = "metric";
const DEFAULT_DISPLAYED_UNIT = "°C";

let city = DEFAULT_CITY;
let unit = DEFAULT_UNIT;
let displayedUnit = DEFAULT_DISPLAYED_UNIT;

function getURL() {
  return `${BASE_URL}&q=${city}&units=${unit}`;
}

(function searchHandler() {
  let validSearch = false;

  const searchInput = document.querySelector("input[class='search']");
  searchInput.addEventListener("input", parseSearchInput);

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

  const selectUnit = document.querySelector("select[name='unit']");
  const searchButton = document.querySelector("button[class='search']");
  searchButton.addEventListener("click", getSearchedValues);

  function getSearchedValues() {
    parseSearchInput();
    if (!validSearch) return;

    city = searchInput.value;
    unit = selectUnit.value;
    dataHandler.getData();
  }
})();

const dataHandler = (() => {
  async function getData() {
    try {
      console.log(city, unit);

      const response = await fetch(getURL(), { mode: "cors" });
      const fetchedData = await response.json();

      console.log(fetchedData);
      const appData = await parseData(fetchedData);
      console.log(appData);
      domHandler.updateDOM(appData);
    } catch (err) {
      console.error(err.message);
    }
  }

  function parseLocationData(fetchedData) {
    return {
      name: fetchedData.city.name,
      country: fetchedData.city.country,
      sunrise: fetchedData.city.sunrise,
      sunset: fetchedData.city.sunset,
    };
  }

  function parseTimestampsData(fetchedData) {
    let list = [];

    fetchedData.list.forEach((timestamp) => {
      list.push({
        dt_txt: timestamp.dt_txt,
        weather: timestamp.weather[0].main,
        weather_description: timestamp.weather[0].description,
        temp: timestamp.main.temp,
        feelsLike: timestamp.main.feels_like,
        humidity: timestamp.main.humidity,
        windSpeed: timestamp.wind.speed,
      });
    });
    return list;
  }

  function parseData(fetchedData) {
    const appData = {
      city: parseLocationData(fetchedData),
      list: parseTimestampsData(fetchedData),
    };

    console.log(appData);
    return appData;
  }
  return {
    getData,
  };
})();

const domHandler = (() => {
  const main = document.querySelector("main");

  function updateDOM(appData) {
    displayedUnit = unit === "metric" ? "°C" : "°F";
    editLocation(appData);
    editTimestampsCarrousel(appData);
  }

  const spanCity = document.querySelector("span[class='city']");
  const spanCountry = document.querySelector("span[class='country']");
  const spanSunRise = document.querySelector("span[class='sun'][id='rise']");
  const spanSunSet = document.querySelector("span[class='sun'][id='set']");

  function editLocation(appData) {
    spanCity.textContent = appData.city.name;
    spanCountry.textContent = appData.city.country;
    spanSunRise.textContent = format(
      fromUnixTime(appData.city.sunrise),
      "h:mma"
    );
    spanSunSet.textContent = format(fromUnixTime(appData.city.sunset), "h:mma");
  }

  function editTimestampsCarrousel(appData) {
    let timestampsCarrousel = document.querySelector(
      "div[class='timestampsCarrousel']"
    );
    main.removeChild(timestampsCarrousel);

    timestampsCarrousel = newNode("div", "timestampsCarrousel");
    for (let i = 0; i < appData.list.length; i++) {
      timestampsCarrousel.appendChild(newTimestamp(appData.list[i]));
    }
    main.appendChild(timestampsCarrousel);
  }

  function newTimestamp(timestampData) {
    const newTimestampContainer = newNode("div", "timestampContainer");
    const primaryDataContainer = newNode("div", "primaryDataContainer");
    const secondaryDataContainer = newNode("div", "secondaryDataContainer");
    newTimestampContainer.append(primaryDataContainer, secondaryDataContainer);

    const timestamp = newNode(
      "span",
      "primary",
      "timestamp",
      format(parseISO(timestampData.dt_txt), "MMM do, ha")
    );
    const weather = newNode(
      "span",
      "primary",
      "weather",
      timestampData.weather
    );
    weather.title = timestampData.weather_description;
    const temp = newNode(
      "span",
      "primary",
      "temp",
      `${Math.trunc(timestampData.temp)}${displayedUnit}`
    );
    primaryDataContainer.append(timestamp, weather, temp);

    const feelsLike = newNode(
      "span",
      "secondary",
      "feelsLike",
      `${Math.trunc(timestampData.feelsLike)}${displayedUnit}`
    );
    const humidity = newNode(
      "span",
      "secondary",
      "humidity",
      `${timestampData.humidity}%`
    );
    let windSpeed;
    if (unit === "metric") {
      windSpeed = newNode(
        "span",
        "secondary",
        "windSpeed",
        `${Math.trunc(timestampData.windSpeed * 3.6)}km/h`
      );
    } else {
      windSpeed = newNode(
        "span",
        "secondary",
        "windSpeed",
        `${timestampData.windSpeed}mph`
      );
    }
    secondaryDataContainer.append(feelsLike, humidity, windSpeed);

    return newTimestampContainer;
  }

  function newNode(type, style, id, text) {
    const node = document.createElement(type);
    node.classList.add(style);
    if (id) node.id = id;
    if (text) node.textContent = text;
    return node;
  }

  return {
    updateDOM,
  };
})();

// dataHandler.getData();
// console.log(format(fromUnixTime("1631597154"), 'h:mma'))
