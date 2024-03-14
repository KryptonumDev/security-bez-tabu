'use client';
import { useEffect, useState } from 'react';
import type { ClientTypes } from './Countdown.types';

const calculateTimeLeft = (date: number) => {
  const now = new Date().getTime();
  const timeDifference: number = date - now;
  if (timeDifference <= 0) {
    return { isExpired: true };
  }
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(timeDifference / day);
  const hours = Math.floor((timeDifference % day) / hour);
  const minutes = Math.floor((timeDifference % hour) / minute);
  const seconds = Math.floor((timeDifference % minute) / second);

  return { days, hours, minutes, seconds };
};

const Client = ({ date, animationDelays }: ClientTypes) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    !timeLeft.isExpired && (
      <>
        <div>
          <div
            className='borderLeft'
            style={{ animationDelay: animationDelays[0] }}
          ></div>
          <div
            className='borderRight'
            style={{ animationDelay: animationDelays[1] }}
          ></div>
          <span dangerouslySetInnerHTML={{ __html: `${timeLeft.days} dni` }} />
        </div>
        <div>
          <div
            className='borderLeft'
            style={{ animationDelay: animationDelays[2] }}
          ></div>
          <div
            className='borderRight'
            style={{ animationDelay: animationDelays[3] }}
          ></div>
          <span dangerouslySetInnerHTML={{ __html: `${timeLeft.hours} godz` }} />
        </div>
        <div>
          <div
            className='borderLeft'
            style={{ animationDelay: animationDelays[4] }}
          ></div>
          <div
            className='borderRight'
            style={{ animationDelay: animationDelays[5] }}
          ></div>
          <span dangerouslySetInnerHTML={{ __html: `${timeLeft.minutes} min` }} />
        </div>
        <div>
          <div
            className='borderLeft'
            style={{ animationDelay: animationDelays[6] }}
          ></div>
          <div
            className='borderRight'
            style={{ animationDelay: animationDelays[7] }}
          ></div>
          <span dangerouslySetInnerHTML={{ __html: `${timeLeft.seconds} sek` }} />
        </div>
      </>
    )
  );
};

export default Client;
