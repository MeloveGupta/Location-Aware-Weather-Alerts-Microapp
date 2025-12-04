// Central place to cache DOM elements

export const elements = {
    // Search
    citySearch: document.getElementById('citySearch'),
    searchBtn: document.getElementById('searchBtn'),
    locationBtn: document.getElementById('locationBtn'),
    recentSearches: document.getElementById('recentSearches'),

    // Theme
    themeToggle: document.getElementById('themeToggle'),

    // States
    loadingState: document.getElementById('loadingState'),
    errorMessage: document.getElementById('errorMessage'),
    weatherDashboard: document.getElementById('weatherDashboard'),
    retryBtn: document.getElementById('retryBtn'),

    // Weather display
    cityName: document.getElementById('cityName'),
    temperature: document.getElementById('temperature'),
    weatherCondition: document.getElementById('weatherCondition'),
    feelsLike: document.getElementById('feelsLike'),
    weatherIcon: document.getElementById('weatherIcon'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    pressure: document.getElementById('pressure'),
    visibility: document.getElementById('visibility'),
    lastUpdated: document.getElementById('lastUpdated'),
    refreshBtn: document.getElementById('refreshBtn'),

    // Alerts
    alertsSection: document.getElementById('alertsSection'),
    alertsContainer: document.getElementById('alertsContainer'),
    noAlertsState: document.getElementById('noAlertsState'),

    // Error text
    errorText: document.querySelector('#errorMessage .error-text')
};
