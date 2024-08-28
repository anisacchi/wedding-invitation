'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  weddingDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss'
}

const Countdown: React.FC<CountdownProps> = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className='flex space-x-2'>
      <div>
        <div>{timeLeft.days || '0'}</div>
        <div>Days</div>
      </div>
			<div>
        <div>{timeLeft.hours || '0'}</div>
        <div>Hours</div>
      </div>
			<div>
        <div>{timeLeft.minutes || '0'}</div>
        <div>Minutes</div>
      </div>
			<div>
        <div>{timeLeft.seconds || '0'}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
