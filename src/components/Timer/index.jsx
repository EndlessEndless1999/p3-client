import React, { useState, useEffect } from 'react';

const Timer = ({ startTimer }) => {
  const [time, setTime] = useState(180);
  
  useEffect(() => {
    let timerInterval;

    if (startTimer) {
      timerInterval = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(timerInterval);
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [startTimer, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default Timer;
