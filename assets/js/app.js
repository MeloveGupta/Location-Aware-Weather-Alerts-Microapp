// ============================
// APP CONTROLLER
// ============================

import { getUserLocation } from "./services/geolocation.js";
import { getWeatherData } from "./weatherAPI.js";

// UI element references
const tempEl = document.getElementById("temperature");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const feelsLikeEl = document.getElementById("feels-like");
const weatherIconEl = document.getElementById("weather-icon");
const locationStatusEl = document.getElementById("location-status");

// RUN APP
startApp();

async function startApp() {
    try {
        // Step 1: Get coordinates
        const coords = await getUserLocation();

        // Step 2: Fetch weather
        const weather = await getWeatherData(coords.lat, coords.lon);

        // Step 3: Update UI
        updateWeatherUI(weather);

    } catch (error) {
        console.error("App Error:", error);
    }
}

// ============================
// UPDATE UI FUNCTION
// ============================

function updateWeatherUI(weather) {
    tempEl.textContent = `${weather.temperature}°`;
    conditionEl.textContent = capitalize(weather.condition);
    humidityEl.textContent = `${weather.humidity}%`;
    windEl.textContent = `${weather.wind} km/h`;
    feelsLikeEl.textContent = `${weather.feelsLike}°`;

    // Add weather icon (OpenWeather icon system)
    weatherIconEl.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${weather.icon}@4x.png" alt="Weather Icon">
    `;

    locationStatusEl.textContent = `Location: ${weather.city}`;
}

// Helper function to format text
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
