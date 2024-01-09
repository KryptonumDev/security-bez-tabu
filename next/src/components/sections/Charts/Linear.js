'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

const Linear = ({
  item: {
    number,
    title,
  },
  isAngle
}) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });

  return (
    <div className={styles.linear} data-angle={isAngle} ref={wrapper}>
      <div className={styles.bar}>
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${number}%` : 0 }}
          exit={{ width: 0 }}
          transition={{
            type: "spring",
            damping: 35,
            duration: .5,
            ...!isAngle && {
              delay: .1
            }
          }}
          data-visible={isInView}
        >
          <p className={styles.title}>{title}</p>
        </motion.div>
        {!isAngle && (
          <div className={styles.placeholder} data-visible={isInView}>
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                exit={{ scale: 0 }}
                transition={{
                  delay: i * .02
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