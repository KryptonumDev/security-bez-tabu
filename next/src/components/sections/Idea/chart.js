'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';

const Chart = ({ chart }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <div className={styles.chart} ref={wrapper}>
      {chart.map(({ title, description }, i) => (
        <motion.div
          key={i}
          initial={{ y: '100%' }}
          animate={{ y: isInView ? 0 : '100%' }}
          exit={{ y: 0 }}
          transition={{ delay: i * .1 }}
          className={styles.item}
        >
          {title}
          {description}
        </motion.div>
      ))}
    </div>
  );
};

export default Chart;