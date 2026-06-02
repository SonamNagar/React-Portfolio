import React, { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState("00:00:00")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      let h = now.getHours()
      let m = now.getMinutes()
      let s = now.getSeconds()

      h = h < 10 ? "0" + h : h
      m = m < 10 ? "0" + m : m
      s = s < 10 ? "0" + s : s

      setTime(`${h}:${m}:${s}`)
    }

    const interval = setInterval(updateClock, 1000)
    updateClock()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      {/* CLOCK BOX */}
      <div className="relative p-10 md:p-16 rounded-3xl bg-white/5 border border-gray-700 backdrop-blur-xl shadow-2xl text-center">

        {/* Glow border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl -z-10"></div>

        {/* TIME */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-widest drop-shadow-lg">
          {time}
        </h1>

        {/* LABEL */}
        <p className="mt-4 text-sm md:text-base text-gray-300 tracking-[0.3em] uppercase">
          Digital Clock
        </p>

      </div>

    </div>
  )
}

export default Clock