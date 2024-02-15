'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Perks.module.scss';

const randomDurations = Array.from({ length: 8 }).map(() => 4 + Math.random() * 4);
const MotionRect = (isInView: boolean, index = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: isInView ? 1 : 0 },
  transition: {
    delay: (randomDurations[index] as number) * 0.35,
  },
});
const MotionPath = (isInView: boolean, index: number) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: isInView ? 1 : 0 },
  transition: {
    type: 'spring',
    duration: randomDurations[index],
  },
});

const Chips = () => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: '0px 0px -5% 0px' });

  return (
    <div
      className={styles.chip}
      ref={wrapper}
    >
      <Chip isInView={isInView} />
      <Chip
        isInView={isInView}
        filled={true}
      />
    </div>
  );
};

export default Chips;

const Chip = ({ filled, isInView }: { filled?: boolean; isInView: boolean }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='420'
    height='431'
    viewBox='0 0 420 431'
    fill='none'
    stroke={`${filled ? 'var(--secondary-500)' : 'var(--primary-700)'}`}
  >
    <g style={{ animationDelay: `${randomDurations[0]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='257.5'
        y='430.299'
        rx='7.5'
        transform='rotate(-90 257.5 430.299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 0))}
      ></motion.rect>
      <motion.path
        d='M8 374.799h92l63 48h94'
        {...(filled && MotionPath(isInView, 0))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[1]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='257.5'
        y='373.299'
        rx='7.5'
        transform='rotate(-90 257.5 373.299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 1))}
      ></motion.rect>
      <motion.path
        d='M8 317.799h92l63 48h94'
        {...(filled && MotionPath(isInView, 1))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[2]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='404.5'
        y='312.299'
        rx='7.5'
        transform='rotate(-90 404.5 312.299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 2))}
      ></motion.rect>
      <motion.path
        d='M8 266.799h102l57 38h245'
        {...(filled && MotionPath(isInView, 2))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[3]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='307.5'
        y='168.799'
        rx='7.5'
        transform='rotate(-90 307.5 168.799)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 3))}
      ></motion.rect>
      <motion.path
        d='M8 217.799h173l56.5-56.5H318'
        {...(filled && MotionPath(isInView, 3))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[4]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='307.5'
        y='115.799'
        rx='7.5'
        transform='rotate(-90 307.5 115.799)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 4))}
      ></motion.rect>
      <motion.path
        d='M8 164.799h173l56.5-56.5H318'
        {...(filled && MotionPath(isInView, 4))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[5]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='160.5'
        y='126.299'
        rx='7.5'
        transform='rotate(-90 160.5 126.299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 5))}
      ></motion.rect>
      <motion.path
        d='M8 118.799h152'
        {...(filled && MotionPath(isInView, 5))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[6]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='0.5'
        y='0.5'
        rx='7.5'
        transform='matrix(0 1 1 0 257 9.299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 6))}
      ></motion.rect>
      <motion.path
        d='M8 65.299h92l63-48h94'
        {...(filled && MotionPath(isInView, 6))}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[7]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='0.5'
        y='0.5'
        rx='7.5'
        transform='matrix(0 1 1 0 80 .299)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...(filled && MotionRect(isInView, 7))}
      ></motion.rect>
      <motion.path
        d='M8 8.799h80'
        {...(filled && MotionPath(isInView, 7))}
      />
    </g>
  </svg>
);
