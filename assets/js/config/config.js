// Global configuration for the weather app

export const CONFIG = {
    API_KEY: '4dcf94e3d94b9265177077c1765870cf',
    API_BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    UNITS: 'metric',

    ALERTS: {
        HEATWAVE_TEMP: 35,      // °C
        COLD_TEMP: 10,          // °C
        HIGH_WIND: 15,          // m/s
        THUNDERSTORM: [200, 299],
        RAIN: [300, 599],
        SNOW: [600, 699],
        EXTREME: [900, 906]
    },

    STORAGE_KEYS: {
        DEFAULT_LOCATION: 'defaultLocation',
        THEME: 'theme',
        RECENT_SEARCHES: 'recentSearches'
    },

    MAX_RECENT_SEARCHES: 5
};
