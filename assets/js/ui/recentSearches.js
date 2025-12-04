import { storage } from '../core/storage.js';
import { elements } from './domElements.js';
import { weatherAPI } from '../services/weatherApi.js';

export function renderRecentSearches() {
    const searches = storage.getRecentSearches();
    elements.recentSearches.innerHTML = '';

    if (!searches.length) return;

    searches.forEach((search) => {
        const chip = document.createElement('button');
        chip.className = 'recent-search-chip';
        chip.textContent = search.country
            ? `${search.city}, ${search.country}`
            : search.city;

        chip.addEventListener('click', () => {
            weatherAPI.fetchWeatherByCity(search.city);
        });

        elements.recentSearches.appendChild(chip);
    });
}
