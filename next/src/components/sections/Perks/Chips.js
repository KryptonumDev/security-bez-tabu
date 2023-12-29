'use client'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Chips = () => {
  return (
    <div className={styles.chip}>
      <Chip />
      <Chip filled={true} />
    </div>
  );
};

export default Chips;

const Chip = ({ filled, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='420'
    height='431'
    fill='none'
    viewBox='0 0 420 431'
    {...props}
  >
    <motion.path
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      d='M8 164.799h173l56.5-56.5H318M8 217.799h173l56.5-56.5H318'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
      }}
    ></motion.path>
    <motion.path
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      d='M8 118.799h152m-152 148h102l57 38h245m-404 13h92l63 48h94M8 65.299h92l63-48h94M8 374.799h92l63 48h94M8 8.799h80'
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
      }}
    ></motion.path>
    <motion.rect
      width='15'
      height='15'
      x='0.5'
      y='172.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 172.299)'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 10,
      }}
    ></motion.rect>
    <motion.rect
      width='15'
      height='15'
      x='0.5'
      y='225.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 225.299)'
    ></motion.rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='274.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 274.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='325.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 325.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='0.5'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='matrix(0 1 1 0 0 57.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='0.5'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='matrix(0 1 1 0 0 .299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='0.5'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='matrix(0 1 1 0 80 .299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='382.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 382.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='404.5'
      y='312.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 404.5 312.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='126.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 .5 126.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='307.5'
      y='115.799'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 307.5 115.799)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='307.5'
      y='168.799'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 307.5 168.799)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='160.5'
      y='126.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 160.5 126.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='257.5'
      y='373.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 257.5 373.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='0.5'
      y='0.5'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='matrix(0 1 1 0 257 9.299)'
    ></rect>
    <rect
      width='15'
      height='15'
      x='257.5'
      y='430.299'
      fill={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      stroke={`${filled ? 'var(--secondary-500)' : '#13182A'}`}
      rx='7.5'
      transform='rotate(-90 257.5 430.299)'
    ></rect>
  </svg>
)