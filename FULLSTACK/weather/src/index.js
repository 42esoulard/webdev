import './style.css'

const API_KEY = 'f4aa4eb90aa3aa36c5685d8da7a26dff';
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FAHRENHEIT = 'imperial';
const CELSIUS = 'metric';

const DEFAULT_CITY = 'Paris'

let city = DEFAULT_CITY;
let unit = CELSIUS;
let requestedURL = updateURL();
// function handleCitySearch() {

// }

function updateURL() {
  return `${BASE_URL}&q=${city}&units=${unit}`;
}

async function getData() {
  try {
    const response = await fetch(requestedURL, { mode: 'cors' })
    const fetchedData = await response.json();

    console.log(fetchedData);
    const appData = await parseData(fetchedData);
    console.log(appData);
  } catch (err) {
    console.error(err.message);
  }
}

function parseLocationData(fetchedData) {
  return {
    name : fetchedData.city.name,
    country : fetchedData.city.country,
    sunrise : fetchedData.city.sunrise,
    sunset : fetchedData.city.sunset,
  }
}

function parseTimestampsData(fetchedData) {
  let list = [];

  fetchedData.list.forEach(timestamp => {
    list.push({
      dt: timestamp.dt,
      weather: timestamp.weather[0].main,
      weather_description: timestamp.weather[0].description,
      temp: timestamp.main.temp,
      feels_like: timestamp.main.feels_like,
      humidity: timestamp.main.humidity,
      wind_speed: timestamp.wind.speed,
    });
  });
  return list;
}

function parseData(fetchedData) {
  let appData = { 
    city: parseLocationData(fetchedData),
    list: parseTimestampsData(fetchedData),
  };
  
  console.log(appData);
}

updateURL();
getData();