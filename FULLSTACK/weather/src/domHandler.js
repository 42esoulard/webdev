export { domHandler };

import { format, parseISO, fromUnixTime } from "date-fns";
import { gifHandler } from "./gifHandler";

const ICON_URL = "http://openweathermap.org/img/wn/";
const ICON_THUNDER = "11d@2x.png";
const ICON_DRIZZLE = "09d@2x.png";
const ICON_RAIN = "10d@2x.png";
const ICON_SNOW = "13d@2x.png";
const ICON_MIST = "50d@2x.png";
const ICON_CLEAR = "01d@2x.png";
const ICON_CLOUDS0 = "02d@2x.png";
const ICON_CLOUDS1 = "03d@2x.png";
const ICON_CLOUDS2 = "04d@2x.png";

const HUMIDITY_ICON = "./drop.png";
const WIND_ICON = "./wind.png";

const domHandler = (() => {
  const carrouselContainer = document.querySelector(
    "div[class='carrouselContainer']"
  );
  const btnNext = document.querySelector("div[class='btn'][id='next']");

  function updateDOM(appData) {
    top.displayedUnit = top.unit === "metric" ? "°C" : "°F";
    editLocation(appData);
    gifHandler.setGif();
    editTimestampsCarrousel(appData);
  }

  const spanCity = document.querySelector("span[class='city']");
  const spanCountry = document.querySelector("span[class='country']");
  const spanCurTemp = document.querySelector("span[class='curTemp']");
  const imgCurWeather = document.querySelector("img[class='curWeather']");
  const spanSunRise = document.querySelector("span[class='sun'][id='rise']");
  const spanSunSet = document.querySelector("span[class='sun'][id='set']");

  function getWeatherIcon(code) {
    switch (true) {
      case code / 100 === 2:
        return `${ICON_URL}${ICON_THUNDER}`;
      case code / 100 === 3 || (code >= 520 && code <= 531):
        return `${ICON_URL}${ICON_DRIZZLE}`;
      case code / 100 === 6 || code === 511:
        return `${ICON_URL}${ICON_SNOW}`;
      case code / 100 === 5:
        return `${ICON_URL}${ICON_RAIN}`;
      case code / 100 === 7:
        return `${ICON_URL}${ICON_MIST}`;
      case code === 800:
        return `${ICON_URL}${ICON_CLEAR}`;
      case code === 801:
        return `${ICON_URL}${ICON_CLOUDS0}`;
      case code === 802:
        return `${ICON_URL}${ICON_CLOUDS1}`;
      case code === 803 || code === 804:
        return `${ICON_URL}${ICON_CLOUDS2}`;
    }
  }

  function editLocation(appData) {
    spanCity.textContent = `${appData.city.name},`;
    spanCountry.textContent = appData.city.country;
    spanCurTemp.textContent = `${Math.trunc(appData.list[0].temp)}${
      top.displayedUnit
    }`;
    imgCurWeather.src = getWeatherIcon(appData.list[0].weatherCode);
    imgCurWeather.title = appData.list[0].weather;

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
    carrouselContainer.removeChild(timestampsCarrousel);

    timestampsCarrousel = newNode("div", "timestampsCarrousel");
    for (let i = 0; i < appData.list.length; i++) {
      timestampsCarrousel.appendChild(newTimestamp(appData.list[i], i));
    }
    top.nbOfTimestamps = appData.list.length;
    timestampsCarrousel.firstChild.classList.add("timestampActive");
    carrouselContainer.insertBefore(timestampsCarrousel, btnNext);
  }

  function newTimestamp(timestampData, index) {
    const newTimestampContainer = newNode("div", "timestampContainer");
    const primaryDataContainer = newNode("div", "primaryDataContainer");
    const secondaryDataContainer = newNode("div", "secondaryDataContainer");
    newTimestampContainer.append(primaryDataContainer, secondaryDataContainer);
    newTimestampContainer.id = `ts${index}`;

    const timestamp = newNode(
      "span",
      "primary",
      "timestamp",
      format(parseISO(timestampData.dt_txt), "MMM do, ha")
    );
    const tsWeatherContainer = newNode("div", "tsWeatherContainer");
    const temp = newNode(
      "span",
      "primary",
      "temp",
      `${Math.trunc(timestampData.temp)}${top.displayedUnit}`
    );
    const weather = newNode("img", "primary", "weather", timestampData.weather);
    weather.src = getWeatherIcon(timestampData.weatherCode);
    weather.title = timestampData.weather;
    tsWeatherContainer.append(temp, weather);
    primaryDataContainer.append(timestamp, tsWeatherContainer);

    const feelsLikeIcon = newNode(
      "span",
      "secondary",
      "feelsLikeIcon",
      `Feels like`,
      `Feels Like`
    );
    const feelsLike = newNode(
      "span",
      "secondary",
      "feelsLike",
      `${Math.trunc(timestampData.feelsLike)}${top.displayedUnit}`,
      `Feels Like`
    );
    const humidityIcon = newNode("img", "", "humidityIcon", ``, `Humidity`);
    humidityIcon.src = HUMIDITY_ICON;
    const humidity = newNode(
      "span",
      "secondary",
      "humidity",
      `${timestampData.humidity}%`
    );
    const windIcon = newNode("img", "", "windIcon", ``, `Wind`);
    windIcon.src = WIND_ICON;
    let windSpeed;
    if (top.unit === "metric") {
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
    secondaryDataContainer.append(
      feelsLikeIcon,
      feelsLike,
      humidityIcon,
      humidity,
      windIcon,
      windSpeed
    );

    return newTimestampContainer;
  }

  function newNode(type, style, id, text, title) {
    const node = document.createElement(type);
    if (style) node.classList.add(style);
    if (id) node.id = id;
    if (text) node.textContent = text;
    if (title) node.title = title;
    return node;
  }

  return {
    updateDOM,
  };
})();
