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
    <div className={styles.linear} ref={wrapper}>
      <div className={styles.bar}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${number}%` : 0 }}
          exit={{ width: 0 }}
          transition={{
            type: "spring",
            duration: .8,
          }}
          data-visible={isInView}
        >
          <p className={styles.title}>{title}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Circle;