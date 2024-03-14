import Client from './_Client';
import styles from './Countdown.module.scss';
import type { CountdownTypes } from './Countdown.types';

const animationDelays = Array.from({ length: 8 }, () => `${Math.random() * -5}s`);

const Countdown = async ({ date, className }: CountdownTypes) => {
  if (!date) return null;

  const targetDate = new Date(date).getTime();

  return (
    <div className={`${styles.counter}${className ? ` ${className}` : ''}`}>
      <Client
        date={targetDate}
        animationDelays={animationDelays}
      />
    </div>
  );
};

export default Countdown;
