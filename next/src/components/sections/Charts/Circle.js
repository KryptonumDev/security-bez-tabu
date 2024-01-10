'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

const Circle = ({
  item: {
    number,
    title
  }
}) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });

  return (
    <div className={styles.circle} ref={wrapper} data-visible={isInView}>
      <p className={styles.title}>{title}</p>
      <svg viewBox="0 0 100 100">
        <motion.circle
          cx='50'
          cy='50'
          r='25'
          fill='none'
          stroke='var(--primary-700)'
          initial={{ strokeDashoffset: 158 }}
          animate={{
            strokeDashoffset: isInView ? 158 - (number / 100) * 158 : 158,
          }}
          transition={{
            type: "spring",
            duration: .8,
          }}
        />
      </svg>
    </div>
  );
};

export default Circle;