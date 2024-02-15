'use client';
import { useState } from 'react';
import styles from './Lessons.module.scss';

const List = ({
  list,
  Border,
}: {
  list: { title: string; lessons: string[] }[];
  Border: { Left: React.JSX.Element; Right: React.JSX.Element };
}) => {
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
              display: i >= page * limit ? 'none' : undefined,
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
        <button
          className={styles.showMore}
          onClick={handleShowMore}
        >
          <div className={styles.progress}>
            {Array.from({ length: maxPage + 1 - page }, (_, i) => (
              <div key={i} />
            ))}
          </div>
          Wczytaj więcej ({page * limit}/{totalItems})
        </button>
      )}
    </>
  );
};
export default List;
