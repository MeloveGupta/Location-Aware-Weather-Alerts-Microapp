import { storage } from '../core/storage.js';
import { showLoading, showError } from '../ui/uiRenderer.js';
import { weatherAPI } from './weatherApi.js';

// Geolocation module

export const geolocation = {
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation is not supported by your browser'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ lat: latitude, lon: longitude });
                },
                (error) => {
                    let message = 'Unable to retrieve your location';

                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            message = 'Location access denied. Please search for a city manually.';
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message = 'Location information unavailable.';
                            break;
                        case error.TIMEOUT:
                            message = 'Location request timed out.';
                            break;
                    }

                    reject(new Error(message));
                },
                {
                    timeout: 10000,
                    enableHighAccuracy: false
                }
            );
        });
    },

    async detectAndLoadWeather(saveAsDefault = false) {
        try {
            showLoading();
            const coords = await this.getCurrentPosition();

            if (saveAsDefault) {
                storage.saveDefaultLocation(coords.lat, coords.lon);
            }

            await weatherAPI.fetchWeatherByCoords(coords.lat, coords.lon);
        } catch (error) {
            showError(error.message);
        }
    }
};
