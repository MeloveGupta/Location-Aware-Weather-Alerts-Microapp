// Geolocation Module

export function getUserLocation() {
    return new Promise((resolve, reject) => {

        // Check if browser supports geolocation
        if (!navigator.geolocation) {
            updateLocationStatus("Geolocation not supported.");
            return reject("Geolocation not supported");
        }

        // Request location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };

                updateLocationStatus("Location detected");
                resolve(coords);
            },

            (error) => {
                // Handle common errors
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        updateLocationStatus("Permission denied. Unable to fetch location.");
                        break;

                    case error.POSITION_UNAVAILABLE:
                        updateLocationStatus("Position unavailable.");
                        break;

                    case error.TIMEOUT:
                        updateLocationStatus("Location request timed out.");
                        break;

                    default:
                        updateLocationStatus("Unable to detect location.");
                }

                reject(error);
            }
        );
    });
}

// Update UI
function updateLocationStatus(message) {
    const statusEl = document.getElementById("location-status");
    if (statusEl) statusEl.textContent = message;
}
