import styles from './HeadingGrid.module.scss';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import type { Props } from './HeadingGrid.types';

const HeadingGrid = ({ heading, list }: Props) => {
  return (
    <section className={styles['HeadingGrid']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div>
        {list.map(({ description, title, img }, index) => (
          <div key={index}>
            <Markdown.h3>{title}</Markdown.h3>
            <Markdown>{description}</Markdown>
            <Img data={img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadingGrid;
