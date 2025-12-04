import { elements } from '../ui/domElements.js';
import { toggleTheme } from '../ui/theme.js';
import { weatherAPI } from '../services/weatherApi.js';
import { geolocation } from '../services/geolocation.js';
import { state } from '../core/state.js';
import { initApp } from '../app.js'; // careful: only call, avoid circular logic

export function initEventListeners() {
    // Theme toggle
    elements.themeToggle.addEventListener('click', toggleTheme);

    // Search button
    elements.searchBtn.addEventListener('click', () => {
        const cityName = elements.citySearch.value.trim();
        if (cityName) {
            weatherAPI.fetchWeatherByCity(cityName);
            elements.citySearch.value = '';
        }
    });

    // Search on Enter key
    elements.citySearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cityName = elements.citySearch.value.trim();
            if (cityName) {
                weatherAPI.fetchWeatherByCity(cityName);
                elements.citySearch.value = '';
            }
        }
    });

    // Use my location
    elements.locationBtn.addEventListener('click', () => {
        geolocation.detectAndLoadWeather(true);
    });

    // Refresh
    elements.refreshBtn.addEventListener('click', () => {
        if (state.currentWeather && state.currentWeather.coord) {
            weatherAPI.fetchWeatherByCoords(
                state.currentWeather.coord.lat,
                state.currentWeather.coord.lon
            );
        }
    });

    // Retry
    elements.retryBtn.addEventListener('click', () => {
        initApp();
    });
}
