import styles from './KeyDetails.module.scss';
import Markdown from '@/components/ui/markdown';
import type { KeyDetailsTypes } from './KeyDetails.types';

const KeyDetails = ({ list }: KeyDetailsTypes) => {
  return (
    <section className={styles['KeyDetails']}>
      {list.map(({ heading, paragraph }, i) => (
        <div
          key={i}
          className={styles.item}
        >
          <div className='borderLeft'></div>
          <div className={styles.content}>
            <h2 className='h3'>{heading}</h2>
            <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          </div>
        </div>
      ))}
    </section>
  );
};

export default KeyDetails;
