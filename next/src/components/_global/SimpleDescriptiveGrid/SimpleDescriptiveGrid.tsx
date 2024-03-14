import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './SimpleDescriptiveGrid.module.scss';
import type { SimpleDescriptiveGridTypes } from './SimpleDescriptiveGrid.types';

const SimpleDescriptiveGrid = ({ heading, grid }: SimpleDescriptiveGridTypes) => {
  return (
    <section className={styles['SimpleDescriptiveGrid']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul>
        {grid.map(({ icon, heading, paragraph }, i) => (
          <li key={i}>
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
    </section>
  );
};

export default SimpleDescriptiveGrid;
