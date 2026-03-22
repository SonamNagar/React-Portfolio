import React, { useEffect, useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("Indore");
  const [weather, setWeather] = useState({
    temp: "",
    humidity: "",
    description: "",
    speed: "",
    degree: "",
    maxTemp: "",
  });

  const getWeatherData = async (cityName = "Indore") => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fdbd386d46af179930af7427e4d6c42d&units=metric`
      );
      const data = await res.json();
      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        speed: data.wind.speed,
        degree: data.wind.deg,
        maxTemp: data.main.temp_max,
      });
    } catch (error) {
      alert("City not found or API error");
    }
  };

  const handleSearch = () => {
    if (city.length < 2) {
      alert("Please enter a valid city name");
    } else {
      getWeatherData(city);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter any city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="output-section">
          <div className="card">
            <span>{weather.temp}°C</span>
            <p>Temperature</p>
          </div>
          <div className="card">
            <span>{weather.humidity}</span>
            <p>Humidity</p>
          </div>
          <div className="card">
            <span>{weather.description}</span>
            <p>Description</p>
          </div>
          <div className="card">
            <span>{weather.speed}</span>
            <p>Speed</p>
          </div>
          <div className="card">
            <span>{weather.degree}</span>
            <p>Degree</p>
          </div>
          <div className="card">
            <span>{weather.maxTemp}</span>
            <p>Maximum Temperature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;