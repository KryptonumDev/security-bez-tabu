import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './SimpleDescriptiveGrid.module.scss';
import type { SimpleDescriptiveGridTypes } from './SimpleDescriptiveGrid.types';
import ChipsAnimation from '@/components/ui/ChipsAnimation';

const SimpleDescriptiveGrid = ({ heading, grid }: SimpleDescriptiveGridTypes) => {
  return (
    <section className={styles['SimpleDescriptiveGrid']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul className={styles.list}>
        {grid.map(({ icon, heading, paragraph }, i) => (
          <li
            key={i}
            className={styles.item}
          >
            <div className={styles.icon}>
              <Img
                data={icon}
                sizes='24px'
              />
            </div>
            <h3>{heading}</h3>
            <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          </li>
        ))}
      </ul>
      <ChipsAnimation
        positionX='left'
        positionY='bottom'
      />
    </section>
  );
};

export default SimpleDescriptiveGrid;
