'use client';

import { useEffect, useState } from 'react';
import styles from './Countdown.module.scss';

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

const Client = ({
  date,
  BorderLeft,
  BorderRight,
}: {
  date: number;
  BorderLeft: React.ReactNode;
  BorderRight: React.ReactNode;
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className={styles.counter}>
      {!timeLeft.isExpired && (
        <>
          <div>
            {BorderLeft}
            <span dangerouslySetInnerHTML={{ __html: `${timeLeft.days} dni` }} />
            {BorderRight}
          </div>
          <div>
            {BorderLeft}
            <span dangerouslySetInnerHTML={{ __html: `${timeLeft.hours} godz` }} />
            {BorderRight}
          </div>
          <div>
            {BorderLeft}
            <span dangerouslySetInnerHTML={{ __html: `${timeLeft.minutes} min` }} />
            {BorderRight}
          </div>
          <div>
            {BorderLeft}
            <span dangerouslySetInnerHTML={{ __html: `${timeLeft.seconds} sek` }} />
            {BorderRight}
          </div>
        </>
      )}
    </div>
  );
};

export default Client;
