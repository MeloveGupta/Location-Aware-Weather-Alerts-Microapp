import { getUserLocation } from "./geolocation.js";
import { getWeatherData } from "./weatherAPI.js";

getUserLocation()
    .then(coords => {
        console.log("Coordinates:", coords);
        return getWeatherData(coords.lat, coords.lon);
    })
    .then(weather => {
        console.log("Weather Data:", weather);
    })
    .catch(err => {
        console.error("Error:", err);
    });
