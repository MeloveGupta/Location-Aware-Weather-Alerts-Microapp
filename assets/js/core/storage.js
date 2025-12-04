import { CONFIG } from '../config/config.js';

export const storage = {
    saveDefaultLocation(lat, lon) {
        try {
            localStorage.setItem(
                CONFIG.STORAGE_KEYS.DEFAULT_LOCATION,
                JSON.stringify({ lat, lon })
            );
        } catch (error) {
            console.error('Failed to save location:', error);
        }
    },

    getDefaultLocation() {
        try {
            const data = localStorage.getItem(CONFIG.STORAGE_KEYS.DEFAULT_LOCATION);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Failed to load location:', error);
            return null;
        }
    },

    saveTheme(theme) {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, theme);
        } catch (error) {
            console.error('Failed to save theme:', error);
        }
    },

    getTheme() {
        try {
            return localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) || 'light';
        } catch (error) {
            console.error('Failed to load theme:', error);
            return 'light';
        }
    },

    saveRecentSearch(cityName, country) {
        try {
            let searches = this.getRecentSearches();
            const searchEntry = { city: cityName, country };

            searches = searches.filter(
                (s) => s.city.toLowerCase() !== cityName.toLowerCase()
            );

            searches.unshift(searchEntry);
            searches = searches.slice(0, CONFIG.MAX_RECENT_SEARCHES);

            localStorage.setItem(
                CONFIG.STORAGE_KEYS.RECENT_SEARCHES,
                JSON.stringify(searches)
            );
        } catch (error) {
            console.error('Failed to save recent search:', error);
        }
    },

    getRecentSearches() {
        try {
            const data = localStorage.getItem(CONFIG.STORAGE_KEYS.RECENT_SEARCHES);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Failed to load recent searches:', error);
            return [];
        }
    }
};