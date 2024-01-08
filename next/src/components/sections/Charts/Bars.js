'use client'
import { useRef } from 'react';
import styles from './styles.module.scss';
import { motion, useInView } from 'framer-motion';
import useMediaQuery from '@/utils/useMediaQuery';

const Bars = ({ charts }) => {
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, { once: true, margin: "0px 0px -33% 0px" });
  const isMobile = useMediaQuery("(max-width: 1149px)");

  return (
    <div className={styles.bars} ref={wrapper}>
      {charts.map(({ number, title }, i) => (
        <div
          key={i}
          title={`${number}%`}
        >
          <div className={styles.bar}>
            <motion.div
              animate={
                isMobile
                ? { width: isInView ? `${number}%` : 0  }
                : { height: isInView ? `${number}%` : 0 }
              }
              transition={{
                type: "spring",
                duration: .8,
                delay: i * .1
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