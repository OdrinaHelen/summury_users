import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <div>
      <h1>
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:{formatTimeUnit(seconds)}
      </h1>
    </div>
  );
};

export default Clock;