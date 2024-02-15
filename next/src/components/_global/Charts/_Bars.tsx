'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Charts.module.scss';
import useMediaQuery from '@/utils/useMediaQuery';

const Bars = ({ charts }: { charts: { title: string; number: number }[] }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: '0px 0px -33% 0px' });
  const isMobile = useMediaQuery('(max-width: 1149px)');

  return (
    <div
      className={styles.bars}
      ref={wrapper}
    >
      {charts.map(({ number, title }, i) => (
        <div
          key={i}
          title={`${number}%`}
        >
          <div className={styles.bar}>
            <motion.div
              animate={isMobile ? { width: isInView ? `${number}%` : 0 } : { height: isInView ? `${number}%` : 0 }}
              transition={{
                type: 'spring',
                duration: 0.8,
                delay: i * 0.1,
              }}
            />
          </div>
          <p className={styles.title}>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Bars;
