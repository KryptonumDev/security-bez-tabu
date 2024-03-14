'use client';
import { useState } from 'react';
import styles from './DetailedOrderedList.module.scss';
import type { ListTypes } from './DetailedOrderedList.types';

const SHOW_LIMIT = 10;

const List = ({ list, animationDelays, ...props }: ListTypes) => {
  const [page, setPage] = useState(1);
  const totalItems = list.length;
  const maxPage = Math.ceil(totalItems / SHOW_LIMIT);

  const handleShowMore = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <ol {...props}>
        {list.map(({ heading, paragraph }, i) => (
          <li
            key={i}
            style={{
              display: i >= page * SHOW_LIMIT ? 'none' : undefined,
            }}
          >
            <div
              className='borderLeft'
              style={{ animationDelay: animationDelays[i].left }}
            ></div>
            <div
              className='borderRight'
              style={{ animationDelay: animationDelays[i].right }}
            ></div>
            {heading}
            {paragraph}
          </li>
        ))}
      </ol>
      {page < maxPage && (
        <button
          className={styles.showMore}
          onClick={handleShowMore}
        >
          <div className={styles.progress}>
            {Array.from({ length: maxPage + 1 - page }, (_, i) => (
              <div key={i} />
            ))}
          </div>
          Wczytaj więcej ({page * SHOW_LIMIT}/{totalItems})
        </button>
      )}
    </>
  );
};
export default List;
