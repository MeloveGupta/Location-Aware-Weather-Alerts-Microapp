import { CONFIG } from '../config/config.js';

// Computes alerts based on weather data

export const alertEngine = {
    generateAlerts(data) {
        const alerts = [];

        if (!data || !data.main || !data.weather || !data.weather[0]) {
            return alerts;
        }

        const temp = data.main.temp;
        const weatherCode = data.weather[0].id;
        const windSpeed = data.wind ? data.wind.speed : 0;
        const condition = data.weather[0].main.toLowerCase();

        // Thunderstorm
        if (weatherCode >= CONFIG.ALERTS.THUNDERSTORM[0] &&
            weatherCode <= CONFIG.ALERTS.THUNDERSTORM[1]) {
            alerts.push({
                type: 'danger',
                icon: '⚡',
                message: 'Thunderstorm Alert: Severe thunderstorm conditions detected. Stay indoors!'
            });
        }

        // Rain (but not thunderstorm)
        if ((weatherCode >= CONFIG.ALERTS.RAIN[0] &&
             weatherCode <= CONFIG.ALERTS.RAIN[1]) &&
            !(weatherCode >= CONFIG.ALERTS.THUNDERSTORM[0] &&
              weatherCode <= CONFIG.ALERTS.THUNDERSTORM[1])) {
            alerts.push({
                type: 'info',
                icon: '🌧️',
                message: 'Rain Alert: Rainy conditions expected. Don\'t forget your umbrella!'
            });
        }

        // Snow
        if (weatherCode >= CONFIG.ALERTS.SNOW[0] &&
            weatherCode <= CONFIG.ALERTS.SNOW[1]) {
            alerts.push({
                type: 'warning',
                icon: '❄️',
                message: 'Snow Alert: Snowy conditions detected. Drive carefully!'
            });
        }

        // Heatwave
        if (temp > CONFIG.ALERTS.HEATWAVE_TEMP) {
            alerts.push({
                type: 'danger',
                icon: '🔥',
                message: `Heatwave Alert: Temperature is ${temp.toFixed(1)}°C. Stay hydrated and avoid prolonged sun exposure!`
            });
        }

        // Cold
        if (temp < CONFIG.ALERTS.COLD_TEMP) {
            alerts.push({
                type: 'warning',
                icon: '🧊',
                message: `Cold Alert: Temperature is ${temp.toFixed(1)}°C. Dress warmly!`
            });
        }

        // High wind
        if (windSpeed > CONFIG.ALERTS.HIGH_WIND) {
            alerts.push({
                type: 'warning',
                icon: '💨',
                message: `High Wind Alert: Wind speed is ${windSpeed.toFixed(1)} m/s. Secure loose objects!`
            });
        }

        // Fog / Mist
        if (condition.includes('fog') || condition.includes('mist')) {
            alerts.push({
                type: 'info',
                icon: '🌫️',
                message: 'Visibility Alert: Foggy conditions. Drive with caution!'
            });
        }

        // Extreme codes
        if (weatherCode >= CONFIG.ALERTS.EXTREME[0] &&
            weatherCode <= CONFIG.ALERTS.EXTREME[1]) {
            alerts.push({
                type: 'danger',
                icon: '⚠️',
                message: 'Extreme Weather Alert: Severe weather conditions! Take necessary precautions!'
            });
        }

        return alerts;
    }
};
