// ============================
// WEATHER API MODULE
// ============================

const API_KEY = "4dcf94e3d94b9265177077c1765870cf";

export async function getWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        // Clean and return required weather fields
        return {
            city: data.name,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            condition: data.weather[0].description,
            icon: data.weather[0].icon
        };

    } catch (error) {
        console.error("Weather API Error:", error);
        throw error;
    }
}
