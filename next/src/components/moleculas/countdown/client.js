'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { calculateTimeLeft } from '.';

const Client = ({ date, BorderLeft, BorderRight }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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