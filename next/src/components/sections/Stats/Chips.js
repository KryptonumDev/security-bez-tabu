'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

const randomDurations = Array.from({ length: 5 }).map(() => (4 + Math.random() * 4));
const MotionRect = (isInView, index=0) => ({
  initial: { opacity: 0 },
  animate: { opacity: isInView ? 1 : 0 },
  transition: {
    delay: randomDurations[index] * .35,
  },
})
const MotionPath = (isInView, index) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: isInView ? 1 : 0 },
  transition: {
    type: "spring",
    duration: randomDurations[index]
  },
})

const Chips = () => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <div className={styles.chip} ref={wrapper}>
      <Chip isInView={isInView} />
      <Chip isInView={isInView} filled={true} />
    </div>
  );
};

export default Chips;

const Chip = ({ filled, isInView }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='420'
    height='329'
    viewBox='0 0 420 329'
    fill='none'
    stroke={`${filled ? 'var(--secondary-500)' : 'var(--primary-700)'}`}
  >
    <g style={{ animationDelay: `${randomDurations[0]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 162 327.25)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...filled && MotionRect(isInView, 0)}
      ></motion.rect>
      <motion.path
        d='M412 272.25h-92l-63 48h-94'
        {...filled && MotionPath(isInView, 0)}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[1]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 162 270.25)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...filled && MotionRect(isInView, 1)}
      ></motion.rect>
      <motion.path
        d='M412 215.25h-92l-63 48h-94'
        {...filled && MotionPath(isInView, 1)}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[2]}s` }}>
      <motion.rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 16 210.25)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...filled && MotionRect(isInView, 2)}
      ></motion.rect>
      <motion.path
        d='M412 164.25H310l-57 38H8'
        {...filled && MotionPath(isInView, 2)}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[3]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 259 117.25)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...filled && MotionRect(isInView, 3)}
      ></motion.rect>

      <motion.path
        d='M412 110.25H260'
        {...filled && MotionPath(isInView, 3)}
      />
    </g>
    <g style={{ animationDelay: `${randomDurations[4]}s` }}>
      <motion.rect
        width='15'
        height='15'
        x='162.5'
        y='1.25'
        rx='7.5'
        transform='rotate(90 162.5 1.25)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
        {...filled && MotionRect(isInView, 4)}
      ></motion.rect>
      <motion.path
        d='M412 56.75h-92l-63-48h-94'
        {...filled && MotionPath(isInView, 4)}
      />
    </g>
  </svg>
)