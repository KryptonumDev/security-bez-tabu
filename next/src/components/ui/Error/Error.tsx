'use client';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Error.module.scss';
import type { ErrorTypes } from './Error.types';

const Error = ({ error }: ErrorTypes) => (
  <AnimatePresence
    initial={false}
    mode='wait'
  >
    {error && (
      <motion.span
        initial={{ height: 0, marginTop: 0 }}
        animate={{ height: 'auto', marginTop: 4 }}
        exit={{ height: 0, marginTop: 0 }}
        className={styles.error}
        role='alert'
      >
        <ErrorIcon />
        <span>{error}</span>
      </motion.span>
    )}
  </AnimatePresence>
);

export default Error;

const ErrorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={17}
    fill='none'
  >
    <path
      stroke='#F19D9D'
      d='M8.791 5.167v4'
    />
    <circle
      cx={8.792}
      cy={11.167}
      r={0.667}
      fill='#F19D9D'
    />
    <path
      stroke='#F19D9D'
      d='M6.02 3.035c1.352-.801 2.028-1.202 2.771-1.202.743 0 1.419.401 2.771 1.202l.458.27c1.352.802 2.029 1.202 2.4 1.862.371.66.371 1.46.371 3.062v.542c0 1.602 0 2.403-.371 3.063-.371.66-1.048 1.06-2.4 1.86l-.458.271c-1.352.801-2.028 1.202-2.771 1.202-.743 0-1.419-.4-2.771-1.202l-.458-.27c-1.352-.801-2.028-1.202-2.4-1.861-.371-.66-.371-1.461-.371-3.063V8.23c0-1.602 0-2.403.371-3.062.372-.66 1.048-1.06 2.4-1.861l.458-.271z'
      opacity={0.5}
    />
  </svg>
);
