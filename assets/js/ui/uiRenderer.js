import { state } from '../core/state.js';
import { elements } from './domElements.js';
import { getCurrentTimeLabel } from '../utils/time.js';
import { capitalize } from '../utils/format.js';

export function showLoading() {
    state.isLoading = true;
    elements.loadingState.classList.remove('hidden');
    elements.errorMessage.classList.add('hidden');
    elements.weatherDashboard.classList.add('hidden');
    elements.alertsSection.classList.add('hidden');
    elements.noAlertsState.classList.add('hidden');
}

export function showError(message) {
    state.isLoading = false;
    elements.loadingState.classList.add('hidden');
    elements.weatherDashboard.classList.add('hidden');
    elements.alertsSection.classList.add('hidden');
    elements.noAlertsState.classList.add('hidden');

    elements.errorMessage.classList.remove('hidden');
    if (elements.errorText) {
        elements.errorText.textContent = message;
    }
}

export function renderWeather(data) {
    state.isLoading = false;
    elements.loadingState.classList.add('hidden');
    elements.errorMessage.classList.add('hidden');
    elements.weatherDashboard.classList.remove('hidden');

    const cityName = data.name || 'Unknown';
    const country = data.sys && data.sys.country ? data.sys.country : '';
    elements.cityName.textContent = country ? `${cityName}, ${country}` : cityName;

    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    elements.temperature.textContent = Math.round(temp);
    elements.feelsLike.textContent = `Feels like ${Math.round(feelsLike)}°C`;

    const condition = data.weather[0].description;
    elements.weatherCondition.textContent = capitalize(condition);

    const iconCode = data.weather[0].icon;
    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    elements.weatherIcon.alt = condition;

    elements.humidity.textContent = `${data.main.humidity}%`;
    elements.windSpeed.textContent = `${data.wind.speed.toFixed(1)} m/s`;
    elements.pressure.textContent = `${data.main.pressure} hPa`;

    const visibility = data.visibility ? (data.visibility / 1000).toFixed(1) : 'N/A';
    elements.visibility.textContent = visibility !== 'N/A' ? `${visibility} km` : visibility;

    elements.lastUpdated.textContent = `Last updated: ${getCurrentTimeLabel()}`;
}
