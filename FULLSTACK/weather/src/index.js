import "./style.css";
import "animate.css";
import { dataHandler } from "./dataHandler";
import { slidesHandler } from "./slidesHandler";

const DEFAULT_CITY = "Paris";
const DEFAULT_UNIT = "metric";
const DEFAULT_DISPLAYED_UNIT = "°C";

top.city = DEFAULT_CITY;
top.unit = DEFAULT_UNIT;
top.displayedUnit = DEFAULT_DISPLAYED_UNIT;
top.nbOfTimestamps = 0;

(function initApp() {
  dataHandler.getData();
  slidesHandler();
})();
