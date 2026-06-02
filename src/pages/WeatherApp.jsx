import React, { useState } from "react"
import { Sun, Moon, Cloud, CloudRain, CloudSnow } from "lucide-react"

const API_KEY = import.meta.env.VITE_WEATHER_API

export default function Weather() {
  const [city, setCity] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const fetchWeather = async () => {
    if (!city) return

    setLoading(true)
    setError("")
    setData(null)

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const result = await res.json()

      if (result.cod === 404 || result.cod === "404") {
        setError("City not found")
      } else {
        setData(result)
      }
    } catch {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return <Cloud size={70} />
      case "Rain":
        return <CloudRain size={70} />
      case "Snow":
        return <CloudSnow size={70} />
      case "Clear":
        return <Sun size={70} />
      default:
        return <Cloud size={70} />
    }
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300 text-black"
      }`}
    >

      <div className="text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
          🌦 Weather App
        </h1>

        <p className="mb-6 text-sm opacity-80">
          Real-time weather updates
        </p>

        {/* CARD */}
        <div
          className={`w-80 p-6 rounded-3xl border backdrop-blur-2xl shadow-2xl transition-all duration-500 ${
            darkMode
              ? "bg-white/10 border-white/20"
              : "bg-white/30 border-white/40"
          }`}
        >

          {/* THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-4 p-2 rounded-full bg-white/20 hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 rounded-xl outline-none mb-3 text-black"
          />

          {/* BUTTON */}
          <button
            onClick={fetchWeather}
            className="w-full p-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-105 transition"
          >
            Search
          </button>

          {/* STATUS */}
          {loading && <p className="mt-3">Loading...</p>}
          {error && <p className="mt-3 text-red-500">{error}</p>}

          {/* DATA */}
          {data && data.main && (
            <div className="mt-6 space-y-2">

              <h2 className="text-xl font-bold">{data.name}</h2>

              <div className="flex justify-center animate-bounce">
                {getWeatherIcon(data.weather[0].main)}
              </div>

              <p className="font-semibold">
                {data.weather[0].main}
              </p>

              <p>🌡 {data.main.temp}°C</p>
              <p>💧 {data.main.humidity}%</p>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}