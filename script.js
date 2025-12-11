const apiKey = "e0c0de0f64a1a32dc7f5b431443d222c";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".city-name").innerText = data.name;
  document.querySelector(".temperature").innerText =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".weather-description").innerText =
    data.weather[0].description;
  document.querySelector(".humidity").innerText = data.main.humidity + "%";
  document.querySelector(".wind").innerText = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  }
}

document.querySelector(".search-button").addEventListener("click", function () {
  const city = document.querySelector(".search-bar").value;
  if (city.trim()) {
    fetchweather(city);
  }
  document.querySelector(".display").style.display = "block";
});

// Enter key to search
document
  .querySelector(".search-bar")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const city = this.value;
      if (city.trim()) {
        fetchweather(city);
        document.querySelector(".display").style.display = "block";
      }
    }
  });

// Reset to default state when search box is cleared
document.querySelector(".search-bar").addEventListener("input", function () {
  if (this.value.trim() === "") {
    document.querySelector(".display").style.display = "none";
  }
});

document.querySelector(".title").addEventListener("click", function () {
  document.querySelector(".display").style.display = "none";
  document.querySelector(".search-bar").value = "";
});
