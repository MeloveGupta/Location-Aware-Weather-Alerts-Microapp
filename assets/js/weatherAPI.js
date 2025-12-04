import { CONFIG } from '../config/config.js';
import { state } from '../core/state.js';
import { storage } from '../core/storage.js';
import { showLoading, showError, renderWeather } from '../ui/uiRenderer.js';
import { renderAlerts } from '../ui/alertsRenderer.js';
import { renderRecentSearches } from '../ui/recentSearches.js';
import { alertEngine } from './alertsEngine.js';

export const weatherAPI = {
    async fetchWeatherByCoords(lat, lon) {
        const url = `${CONFIG.API_BASE_URL}?lat=${lat}&lon=${lon}&units=${CONFIG.UNITS}&appid=${CONFIG.API_KEY}`;
        await this.fetchWeather(url);
    },

    async fetchWeatherByCity(cityName) {
        if (!cityName || cityName.trim() === '') {
            showError('Please enter a city name');
            return;
        }

        const url = `${CONFIG.API_BASE_URL}?q=${encodeURIComponent(
            cityName
        )}&units=${CONFIG.UNITS}&appid=${CONFIG.API_KEY}`;
        await this.fetchWeather(url);
    },

    async fetchWeather(url) {
        try {
            showLoading();

            const response = await fetch(url);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please try another city.');
                } else if (response.status === 401) {
                    throw new Error('Invalid API key. Please check your configuration.');
                } else if (response.status >= 500) {
                    throw new Error('Weather service unavailable. Please try again later.');
                } else {
                    throw new Error('Failed to fetch weather data.');
                }
            }

            const data = await response.json();

            if (!data || !data.main || !data.weather) {
                throw new Error('Invalid weather data received.');
            }

            if (data.name && data.sys && data.sys.country) {
                storage.saveRecentSearch(data.name, data.sys.country);
                renderRecentSearches();
            }

            state.currentWeather = data;
            renderWeather(data);

            const alerts = alertEngine.generateAlerts(data);
            renderAlerts(alerts);
        } catch (error) {
            console.error('Weather fetch error:', error);

            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                showError('No internet connection. Please check your network and retry.');
            } else {
                showError(error.message);
            }
        }
    }
};
