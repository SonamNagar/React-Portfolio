import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      // Add leading zero
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      setTime(`${h}:${m}:${s}`);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // initial call

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="clock-container">
      <div className="clock">{time}</div>
    </div>
  );
};

export default Clock;
