'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Faq.module.scss';
import { EASING } from '@/global/constants';

const List = ({
  list,
  indicator,
}: {
  list: { question: React.JSX.Element; answer: React.JSX.Element }[];
  indicator: React.JSX.Element;
}) => {
  const [opened, setOpened] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setOpened(i);
  };

  return (
    <div className={styles.faq}>
      {list.map(({ question, answer }, i) => (
        <details
          key={i}
          open
          data-opened={opened === i}
        >
          <summary
            onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e, i)}
            tabIndex={opened === i ? -1 : 0}
          >
            {question}
            {indicator}
          </summary>
          <motion.div
            className={styles.answer}
            initial={{ height: i === 0 ? 'auto' : 0, marginBottom: i === 0 ? '20px' : 0 }}
            animate={{ height: opened === i ? 'auto' : 0, marginBottom: opened === i ? '20px' : 0 }}
            exit={{ height: 0, marginBottom: '0' }}
            transition={{
              duration: 0.5,
              ease: EASING,
            }}
          >
            {answer}
          </motion.div>
        </details>
      ))}
    </div>
  );
};

export default List;
