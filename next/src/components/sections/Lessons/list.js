"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { motion } from 'framer-motion';

const List = ({ list, Border }) => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const totalItems = list.length;
  const maxPage = Math.ceil(totalItems / limit);

  const handleShowMore = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

	return (
		<>
      <ol>
        {list.map(({ title, lessons }, i) => (
          <li
            key={i}
            style={{
              display: i >= page * limit && 'none',
            }}
          >
            <p className={styles.title}>{title}</p>
            <ol>
              {lessons.map((item, i) => (
                <li key={i}>
                  <span className={styles.counter}>Lekcja {i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            {Border.Left}
            {Border.Right}
          </li>
        ))}
      </ol>
      {page < maxPage && (
        <div className={styles.showMore}>
          <div className={styles.progress}>
            {Array.from({ length: maxPage }, (_, i) => (
              <motion.div
                key={i}
                animate={{
                  'flex-grow': i === 0 ? 1 : 0,
                }}
              ></motion.div>
            ))}
          </div>
          <button onClick={handleShowMore}>
            Wczytaj więcej ({page * limit}/{totalItems})
          </button>
        </div>
      )}
		</>
	);
};
export default List;
