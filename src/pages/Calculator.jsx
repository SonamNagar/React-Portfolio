import React, { useState } from "react"

const Calculator = () => {
  const [display, setDisplay] = useState("")

  const handleClick = (value) => {
    setDisplay((prev) => prev + value)
  }

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString())
    } catch {
      setDisplay("Error")
    }
  }

  const allClear = () => setDisplay("")
  const del = () => setDisplay(display.slice(0, -1))

  const sq = () => {
    try {
      setDisplay((parseFloat(display) ** 2).toString())
    } catch {
      setDisplay("Error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">

      <div className="w-full max-w-sm p-6 rounded-3xl border border-gray-700 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* DISPLAY */}
        <input
          type="text"
          value={display}
          readOnly
          className="w-full h-20 mb-6 px-4 text-right text-3xl font-bold text-white bg-white/10 border border-gray-700 rounded-2xl outline-none"
        />

        {/* BUTTONS */}
        <div className="grid grid-cols-4 gap-3">

          {/* TOP FUNCTIONS */}
          <button onClick={allClear} className="col-span-1 h-14 rounded-xl bg-red-500 text-white hover:bg-red-600 transition">
            AC
          </button>

          <button onClick={del} className="h-14 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition">
            DEL
          </button>

          <button onClick={sq} className="h-14 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition">
            SQ
          </button>

          <button onClick={() => handleClick("/")} className="h-14 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
            ÷
          </button>

          {/* ROW 1 */}
          <button onClick={() => handleClick("7")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">7</button>
          <button onClick={() => handleClick("8")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">8</button>
          <button onClick={() => handleClick("9")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">9</button>
          <button onClick={() => handleClick("*")} className="h-14 rounded-xl bg-blue-500 text-white hover:bg-blue-600">×</button>

          {/* ROW 2 */}
          <button onClick={() => handleClick("4")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">4</button>
          <button onClick={() => handleClick("5")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">5</button>
          <button onClick={() => handleClick("6")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">6</button>
          <button onClick={() => handleClick("-")} className="h-14 rounded-xl bg-blue-500 text-white hover:bg-blue-600">−</button>

          {/* ROW 3 */}
          <button onClick={() => handleClick("1")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">1</button>
          <button onClick={() => handleClick("2")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">2</button>
          <button onClick={() => handleClick("3")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">3</button>
          <button onClick={() => handleClick("+")} className="h-14 rounded-xl bg-blue-500 text-white hover:bg-blue-600">+</button>

          {/* LAST ROW */}
          <button
            onClick={() => handleClick("0")}
            className="col-span-2 h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700"
          >
            0
          </button>

          <button onClick={() => handleClick(".")} className="h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700">
            .
          </button>

          <button onClick={handleEqual} className="h-14 rounded-xl bg-green-500 text-white hover:bg-green-600">
            =
          </button>

        </div>

      </div>

    </div>
  )
}

export default Calculator