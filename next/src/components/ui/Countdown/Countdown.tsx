import sanityFetch from '@/utils/sanity.fetch';
import Client from './_Client';
import styles from './Countdown.module.scss';
import type { CountdownTypes, QueryType } from './Countdown.types';

const Countdown = async ({ className }: CountdownTypes) => {
  const { countdown_Date } = await query();
  const targetDate = new Date(countdown_Date).getTime();

  return (
    <div className={`${styles.counter}${className ? ` ${className}` : ''}`}>
      <Client date={targetDate} />
    </div>
  );
};

const query = async (): Promise<QueryType> => {
  return await sanityFetch<QueryType>({
    query: /* groq */ `
      *[_id == "WyzwanieSecurity_Global"][0] {
        countdown_Date,
      }
    `,
    tags: ['WyzwanieSecurity_Global'],
  });
};

export default Countdown;
