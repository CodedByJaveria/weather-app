async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "b1a08fc744473fc13b67664838a8d0da"; 
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  if (data.cod === 200) {
    document.getElementById("weather").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img class="icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p>🌡 <b>${data.main.temp}°C</b> (Feels like: ${data.main.feels_like}°C)</p>
      <p>☁ ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } else {
    document.getElementById("weather").innerHTML = `<p>❌ City not found</p>`;
  }
}