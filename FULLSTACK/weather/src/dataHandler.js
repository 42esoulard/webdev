export { dataHandler };
import { domHandler } from "./domHandler";
import { searchHandler } from "./searchHandler";

const OW_API_KEY = "f4aa4eb90aa3aa36c5685d8da7a26dff";
const OW_BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${OW_API_KEY}`;

const dataHandler = (() => {
  function getURL() {
    return `${OW_BASE_URL}&q=${top.city}&units=${top.unit}`;
  }

  async function getData() {
    const loader = document.querySelector("div[id='loaderLoc']");
    try {
      loader.classList.add("loaderActive");
      const response = await fetch(getURL(), { mode: "cors" });
      const fetchedData = await response.json();

      const appData = await parseData(fetchedData);
      domHandler.updateDOM(appData);
    } catch (err) {
      searchHandler.cityNotFound();
    }
    loader.classList.remove("loaderActive");
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
        weatherCode: timestamp.weather[0].id,
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

    return appData;
  }
  return {
    getData,
  };
})();
