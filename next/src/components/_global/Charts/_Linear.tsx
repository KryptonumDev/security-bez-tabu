'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Charts.module.scss';

const Linear = ({
  item: { number, title },
  isAngle,
}: {
  item: {
    number: number;
    title: string;
  };
  isAngle?: boolean;
}) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: '0px 0px -33% 0px' });

  return (
    <div
      className={styles.linear}
      data-angle={isAngle}
      ref={wrapper}
    >
      <div className={styles.bar}>
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${number}%` : 0 }}
          exit={{ width: 0 }}
          transition={{
            type: 'spring',
            damping: 35,
            duration: 0.5,
            ...(!isAngle && {
              delay: 0.1,
            }),
          }}
          data-visible={isInView}
        >
          <p className={styles.title}>{title}</p>
        </motion.div>
        {!isAngle && (
          <div
            className={styles.placeholder}
            data-visible={isInView}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                exit={{ scale: 0 }}
                transition={{
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Linear;
