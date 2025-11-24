# OpenWeatherMap API — Integration Notes

## 1. Purpose of the API
The OpenWeatherMap API provides real-time weather data based on geographic coordinates.  
This microapp will use it to fetch:
- Current temperature  
- Weather condition (clouds, rain, clear, etc.)  
- Humidity  
- Wind speed  
- "Feels like" temperature  
- Weather alerts (if available)

---

## 2. API Endpoint Used
**Current Weather Data API**

https://api.openweathermap.org/data/2.5/weather?lat={LAT}&lon={LON}&appid={API_KEY}&units=metric


Parameters:
- `lat` → Latitude  
- `lon` → Longitude  
- `appid` → Your API Key  
- `units=metric` → For °C and km/h

---

## 3. Sample API Call

https://api.openweathermap.org/data/2.5/weather?lat=28.6139&lon=77.2090&appid=YOUR_KEY&units=metric


---

## 4. Fields We Will Extract
From the JSON response, we will use:

### Location
- `name` (city)

### Temperature & Conditions
- `main.temp`
- `main.feels_like`
- `weather[0].description`
- `weather[0].icon`

### Weather Stats
- `main.humidity`
- `wind.speed`

### Alert Triggers (Week 3)
Based on values:
- If `weather.description` contains “rain” → Rain alert  
- If `main.temp` > 38°C → Heatwave alert  
- If `wind.speed` > 40 km/h → Storm alert  

---

## 5. Example Snippet from API Response

```json
{
  "weather": [
    {
      "description": "light rain",
      "icon": "10d"
    }
  ],
  "main": {
    "temp": 24.5,
    "feels_like": 26.1,
    "humidity": 88
  },
  "wind": {
    "speed": 12.3
  },
  "name": "Delhi"
}
