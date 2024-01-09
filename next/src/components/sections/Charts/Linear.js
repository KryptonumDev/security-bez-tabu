'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

const Linear = ({
  item: {
    number,
    title,
    isAngle,
  }
}) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });

  return (
    <div className={styles.linear} data-angle={isAngle} ref={wrapper}>
      <div className={styles.bar}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${number}%` : 0 }}
          exit={{ width: 0 }}
          transition={{
            type: "spring",
            damping: 35,
            duration: .5,
          }}
          data-visible={isInView}
        >
          <p className={styles.title}>{title}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Linear;