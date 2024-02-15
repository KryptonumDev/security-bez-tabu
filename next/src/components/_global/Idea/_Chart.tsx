'use client'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Idea.module.scss';

const Chart = ({ newCharts }: {newCharts: {title: React.JSX.Element; description: React.JSX.Element}[]}) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -50% 0px" });

  return (
    <div className={styles.chart} ref={wrapper}>
      {newCharts.map(({ title, description }, i) => (
        <motion.div
          key={i}
          initial={{ y: '100%' }}
          animate={{ y: isInView ? 0 : '100%' }}
          exit={{ y: 0 }}
          transition={{
            type: "spring",
            duration: .8,
            delay: i * .1
          }}
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