# Weather Application

## 🌤️ Project Overview

A dynamic weather application that displays real-time weather information for any city. Fetches live data from OpenWeatherMap API and presents it with weather icons and detailed metrics.
[check it out](https://an-uncreative.github.io/Weather-App/)

## ✨ Features

- **City Search:** Look up weather for any city worldwide
- **Real-time Data:** Fetches current weather from API
- **Weather Display:** Shows temperature, weather condition, and icons
- **Detailed Metrics:**
  - Current temperature
  - Weather description
  - Humidity percentage
  - Wind speed
  - "Feels like" temperature
- **Weather Icons:** Visual representation of weather conditions
- **Responsive Design:** Mobile and desktop optimized
- **Error Handling:** Graceful handling of invalid city names

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with CSS Grid/Flexbox
- **Vanilla JavaScript (ES6+)** - API calls and DOM manipulation
- **OpenWeatherMap API** - Free weather data API
- **Fetch API** - HTTP requests to weather service
- **JSON Parsing** - Handling API responses

## 📦 Installation & Setup

### Prerequisites

- Free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Steps

```bash
# Open in browser
# Option 1: Double-click index.html
# Option 2: Use Live Server extension

# Get API key:
1. Visit https://openweathermap.org/api
2. Sign up for free account
3. Generate API key
4. Add to script.js: const API_KEY = "your_api_key_here"
```

## 🚀 Usage

1. Enter city name in search box
2. Press Enter or click search button
3. View current weather and metrics
4. Try different cities to compare weather

## 📁 Project Structure

```
weatherapp/
├── index.html          # HTML structure
├── script.js           # Weather API calls and logic
└── style.css           # Styling
```

## 💡 Key Learning Points

- **API Integration:** Making HTTP requests to external API
- **Fetch API:** Using modern fetch() for asynchronous requests
- **Async/Await:** Handling asynchronous operations
- **Promise Handling:** Managing API responses
- **DOM Manipulation:** Updating UI with API data
- **Error Handling:** Try-catch blocks for failed requests
- **JSON Parsing:** Processing API response data
- **Input Validation:** Checking user input before API calls

## 🔌 OpenWeatherMap API

### Endpoint

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Response Data

```json
{
  "main": {
    "temp": 20,
    "feels_like": 19,
    "humidity": 65
  },
  "weather": [{ "description": "Partly cloudy" }],
  "wind": { "speed": 10 }
}
```

## 🐛 Future Improvements

- **5-Day Forecast:** Show weather prediction for next 5 days
- **Multiple Locations:** Save favorite cities
- **Geolocation:** Auto-detect user's location
- **Temperature Units:** Toggle Celsius/Fahrenheit
- **Weather Alerts:** Show severe weather warnings
- **Historical Data:** View past weather data
- **Air Quality Index:** Show pollution levels
- **Dark/Light Theme:** Theme toggle
- **Offline Support:** Cache last weather data
- **Map Integration:** Show weather on map

## 🌍 Expanding Features

1. Add geolocation to auto-fetch local weather
2. Implement 5-day weather forecast
3. Save favorite cities to localStorage
4. Add more weather details (UV index, visibility)
5. Create weather alerts system
6. Add hourly forecast view
7. Integrate map view of weather

## 📚 Resources

- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [Weather Icon Sets](https://openweathermap.org/weather-conditions)

## 👤 Author

Created as part of a personal fullstack development bootcamp learning path

## 📄 License

Educational project
