import Markdown from '@/components/ui/markdown';
import styles from './CompaniesDescriptiveShowcase.module.scss';
import type { CompaniesDescriptiveShowcaseTypes } from './CompaniesDescriptiveShowcase.types';
import Img from '@/components/ui/image';

const CompaniesDescriptiveShowcase = ({ heading, paragraph, list }: CompaniesDescriptiveShowcaseTypes) => {
  return (
    <section className={styles['CompaniesDescriptiveShowcase']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown>{paragraph}</Markdown>
      </header>
      <div className={styles.list}>
        {list.map(({ img, name, description }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            <Img
              data={img}
              sizes='108px'
            />
            <p>{name}</p>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesDescriptiveShowcase;
