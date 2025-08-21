import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div style={{display:"flex-col", justifyContent:"end", alignItems:"center", padding : "50px",  marginLeft:"500px", border : "1px solid black"}}>
      <h1>Mera Stopwatch</h1>
      <p style={{textAlign : "center"}}>{formatTime(time)}</p>
      <button onClick={() => !isRunning && setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
