# 🌤️ WeatherNow – Smart Weather Dashboard
*A modern, modular, real-time weather application built with HTML, CSS, and JavaScript.*

WeatherNow is a fully responsive, feature-rich weather dashboard that provides real-time weather updates, smart alerts, GPS-based location detection, recent searches, and dark mode.  
The project is designed for performance, scalability, and a polished user experience.

---

## 🚀 Live Demo
(Add your GitHub Pages or hosting link here)

Example:  
`https://username.github.io/weathernow`

---

## 📌 Features

### 🌍 Real-Time Weather Data
- Fetches accurate data using **OpenWeatherMap API**
- Displays temperature, humidity, wind, pressure, visibility, and condition icons

### 📍 Auto Location Detection
- Uses the **Geolocation API**
- Automatically loads weather on first visit
- Saves detected location in LocalStorage

### 🔍 City Search + Recent Searches
- Search any global city
- Maintains a recent searches list (max 5)
- One-click access to previous searches

### ⚠️ Smart Weather Alert Engine
Automatically detects:
- Thunderstorms  
- Rain  
- Snow  
- Fog/Mist  
- Heatwave  
- Cold conditions  
- High wind  
- Extreme weather

Alert categories:
- **Danger**
- **Warning**
- **Info**

### 🌓 Light & Dark Mode
- Instant theme switching  
- Saves preference in LocalStorage  

### ✨ UI/UX Enhancements
- Skeleton loading animations  
- Responsive modern UI  
- Smooth transitions  
- Robust error handling for:
  - Invalid city  
  - Network failure  
  - API issues  
  - Location permission denied  

### 🧩 Full Modular Architecture (20+ Files)
Separated into:
- Core  
- Services  
- UI  
- Events  
- Utilities  

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | HTML5, CSS3, JavaScript (ES Modules) |
| API | OpenWeatherMap |
| Storage | LocalStorage |
| Architecture | Modular, event-driven |

---

## ⚙️ How It Works

### 1. App Initialization
- Loads saved theme  
- Loads saved default location  
- If not available, requests geolocation  
- Fetches weather and renders dashboard  
- Displays alerts if applicable  

### 2. Search Workflow
- User enters a city name  
- API fetches current weather  
- City is added to recent searches  
- UI updates instantly  

### 3. Alert Engine
Checks:
- Temperature thresholds  
- Wind speed  
- Weather condition codes  

Displays relevant alerts with colors and icons.

---

## 📦 Installation & Setup

### Option 1 — Run Locally
```bash
git clone https://github.com/yourusername/weathernow.git
cd weathernow
```
Open index.html in your browser.

Option 2 — Use VS Code Live Server

Install "Live Server" extension

Right-click index.html

Select Open with Live Server

### 🔑 API Key Setup

In config.js, add your OpenWeatherMap API key:
```bash
export const CONFIG = {
    API_KEY: "YOUR_API_KEY_HERE",
    API_BASE_URL: "https://api.openweathermap.org/data/2.5/weather",
    UNITS: "metric"
};
```
Get an API key from:
`https://openweathermap.org/api`

### 🧪 Suggested Test Cases

Search: Delhi, Tokyo, Mumbai, New York

Test geolocation

Toggle light/dark mode

Refresh weather

Disconnect internet → test error handling

Enter invalid city → verify error message

### 🌱 Future Enhancements

7-day forecast

Air Quality Index (AQI)

Weather trend charts

Multi-language support

Offline PWA support

### 📝 Credits

Weather data: OpenWeatherMap

UI & Code: Melove Gupta and Bhavya Deora

Icons: OpenWeather + Unicode

### 📜 License

This project is licensed under the MIT License.
