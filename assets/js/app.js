import { storage } from './core/storage.js';
import { applyTheme } from './ui/theme.js';
import { renderRecentSearches } from './ui/recentSearches.js';
import { geolocation } from './services/geolocation.js';
import { weatherAPI } from './services/weatherApi.js';
import { showLoading, showError } from './ui/uiRenderer.js';
import { initEventListeners } from './events/events.js';

// Main initialization logic

export async function initApp() {
    // Load and apply saved theme
    const savedTheme = storage.getTheme();
    applyTheme(savedTheme);

    // Render recent searches
    renderRecentSearches();

    const defaultLocation = storage.getDefaultLocation();

    if (defaultLocation) {
        await weatherAPI.fetchWeatherByCoords(
            defaultLocation.lat,
            defaultLocation.lon
        );
    } else {
        try {
            showLoading();
            const coords = await geolocation.getCurrentPosition();

            storage.saveDefaultLocation(coords.lat, coords.lon);
            await weatherAPI.fetchWeatherByCoords(coords.lat, coords.lon);
        } catch (error) {
            showError(
                error.message +
                    ' You can search for a city using the search bar above.'
            );
        }
    }
}

// Bootstrapping – wait for DOM

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initEventListeners();
        initApp();
    });
} else {
    initEventListeners();
    initApp();
}
