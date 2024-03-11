'use server';
import { QueryType } from './Countdown.types';
import Client from './_Client';
import sanityFetch from '@/utils/sanity.fetch';

const Countdown = async ({ ...props }) => {
  const { countdown_Date } = await query();
  const targetDate = new Date(countdown_Date).getTime();

  return (
    <div {...props}>
      <Client
        date={targetDate}
        BorderLeft={BorderLeft}
        BorderRight={BorderRight}
      />
    </div>
  );
};

const query = async (): Promise<QueryType> => {
  return await sanityFetch<QueryType>({
    query: /* groq */ `
    *[_id == "WyzwanieSecurity_Global"][0] {
      countdown_Date,
    }`,
    tags: ['WyzwanieSecurity_Global'],
  });
};

const BorderLeft = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='68'
    fill='none'
    viewBox='0 0 21 68'
  >
    <path
      fill='#53BAFD'
      d='M17 66.125H1V1.06h14L1 9.697v47.215l16 9.213z'
    ></path>
    <path
      stroke='#53BAFD'
      strokeWidth='2'
      d='M1 56.912v9.213h16L1 56.912zm0 0V9.697m0 0V1.06h14L1 9.697z'
    ></path>
  </svg>
);
const BorderRight = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='68'
    fill='none'
    viewBox='0 0 21 68'
  >
    <path
      fill='#53BAFD'
      d='M4 1h16v65.065H6l14-8.637V10.213L4 1z'
    ></path>
    <path
      stroke='#53BAFD'
      strokeWidth='2'
      d='M20 10.213V1H4l16 9.213zm0 0v47.215m0 0v8.637H6l14-8.637z'
    ></path>
  </svg>
);

export default Countdown;
