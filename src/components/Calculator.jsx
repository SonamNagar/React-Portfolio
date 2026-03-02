import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => setDisplay(prev => prev + value);
  const handleEqual = () => {
    try { setDisplay(eval(display).toString()); } 
    catch { setDisplay("Error"); }
  };
  const allClear = () => setDisplay("");
  const del = () => setDisplay(display.slice(0, -1));
  const sq = () => setDisplay((parseFloat(display) ** 2).toString());

  return (
    <div className="calc">
      <input type="text" id="display" value={display} readOnly />
      <div className="calc-btnContainer">
        <button className="calc-function" onClick={allClear}>AC</button>
        <button className="calc-function" onClick={del}>DEL</button>
        <button className="calc-function" onClick={sq}>SQ</button>
        <button className="calc-op" onClick={() => handleClick("/")}>/</button>

        <button className="calc-num" onClick={() => handleClick("7")}>7</button>
        <button className="calc-num" onClick={() => handleClick("8")}>8</button>
        <button className="calc-num" onClick={() => handleClick("9")}>9</button>
        <button className="calc-op" onClick={() => handleClick("*")}>*</button>

        <button className="calc-num" onClick={() => handleClick("4")}>4</button>
        <button className="calc-num" onClick={() => handleClick("5")}>5</button>
        <button className="calc-num" onClick={() => handleClick("6")}>6</button>
        <button className="calc-op" onClick={() => handleClick("-")}>-</button>

        <button className="calc-num" onClick={() => handleClick("1")}>1</button>
        <button className="calc-num" onClick={() => handleClick("2")}>2</button>
        <button className="calc-num" onClick={() => handleClick("3")}>3</button>
        <button className="calc-op" onClick={() => handleClick("+")}>+</button>

        <button className="calc-num calc-zero" onClick={() => handleClick("0")}>0</button>
        <button className="calc-num" onClick={() => handleClick(".")}>.</button>
        <button className="calc-op" onClick={handleEqual}>=</button>
      </div>
    </div>
  )
}

export default Calculator;
