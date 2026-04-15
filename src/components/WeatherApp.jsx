import React, { useState } from "react";
import { Sun, Moon, Cloud, CloudRain, CloudSnow } from "lucide-react";

const API_KEY = import.meta.env.VITE_WEATHER_API;

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const result = await res.json();

      if (result.cod === 404 || result.cod === "404") {
        setError("❌ City not found");
      } else {
        setData(result);
      }
    } catch (err) {
      setError("⚠️ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return <Cloud size={70} />;
      case "Rain":
        return <CloudRain size={70} />;
      case "Snow":
        return <CloudSnow size={70} />;
      case "Clear":
        return <Sun size={70} />;
      default:
        return <Cloud size={70} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        transition: "0.5s",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* 🌟 Heading */}
        <h1
          style={{
            color: "#fff",
            marginBottom: "10px",
            textShadow: "0 5px 20px rgba(0,0,0,0.4)",
          }}
        >
          🌦 Weather App
        </h1>

        <p style={{ color: "#eee", marginBottom: "20px" }}>
          Real-time weather updates
        </p>

        {/* 🧊 Animated Card */}
        <div
          style={{
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            background: darkMode
              ? "rgba(255,255,255,0.05)"
              : "rgba(255,255,255,0.25)",
            borderRadius: "25px",
            padding: "30px",
            width: "320px",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: darkMode
              ? "0 8px 32px rgba(0,0,0,0.6)"
              : "0 8px 32px rgba(31,38,135,0.2)",
            color: darkMode ? "#fff" : "#000",

            // ✨ Animation
            animation: "float 4s ease-in-out infinite",
          }}
        >
          {/* 🌙 Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: darkMode ? "#333" : "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "12px",
              border: "none",
              outline: "none",
              marginBottom: "12px",
            }}
          />

          {/* Button */}
          <button
            onClick={fetchWeather}
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Search
          </button>

          {/* Status */}
          {loading && <p>⏳ Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* Data */}
          {data && data.main && (
            <div style={{ marginTop: "25px" }}>
              <h2>{data.name}</h2>

              {/* 🌦 Animated Icon */}
              <div style={{ animation: "bounce 2s infinite" }}>
                {getWeatherIcon(data.weather[0].main)}
              </div>

              <p><b>{data.weather[0].main}</b></p>
              <p>🌡 {data.main.temp}°C</p>
              <p>💧 {data.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>

      {/* ✨ Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>
    </div>
  );
}