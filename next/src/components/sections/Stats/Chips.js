'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

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

const Chip = ({ filled, isInView, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='420'
    height='328'
    viewBox='0 0 420 328'
    fill='none'
    stroke={`${filled ? 'var(--secondary-500)' : 'var(--primary-700)'}`}
    {...props}
  >
    <motion.path
      d='M412 109.5H260m152 54H310l-57 38H8m404 13h-92l-63 48h-94M412 56h-92L257 8h-94m249 263.5h-92l-63 48h-94'
      {...filled && {
        initial: { pathLength: 0 },
        animate: { pathLength: isInView ? 1 : 0 },
        transition: {
          duration: 5,
        },
      }}
    ></motion.path>
    <motion.g
      {...filled && {
        initial: { opacity: 0 },
        animate: { opacity: isInView ? 1 : 0 },
        transition: {
          delay: 1.5,
        },
      }}
    >
      <rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 420 171.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 16 209.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 420 222.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='16'
        height='16'
        x='420'
        y='48'
        rx='8'
        transform='rotate(90 420 48)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 420 279.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='16'
        height='16'
        rx='8'
        transform='matrix(0 -1 -1 0 420 117.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 259 116.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 162 269.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='15'
        height='15'
        x='162.5'
        y='0.5'
        rx='7.5'
        transform='rotate(90 162.5 .5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
      <rect
        width='15'
        height='15'
        x='-0.5'
        y='-0.5'
        rx='7.5'
        transform='matrix(0 -1 -1 0 162 326.5)'
        fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      ></rect>
    </motion.g>
  </svg>
)