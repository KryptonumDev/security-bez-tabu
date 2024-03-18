import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './TeamIntroduction.module.scss';
import type { TeamIntroductionTypes } from './TeamIntroduction.types';

const TeamIntroduction = ({ heading, paragraph, list }: TeamIntroductionTypes) => {
  return (
    <section className={styles['TeamIntroduction']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <ul className={styles.list}>
        {list.map(({ img, name, description }, i) => (
          <li
            key={i}
            className={styles.item}
          >
            <Img
              data={img}
              sizes='355px'
            />
            <div>
              <h3 className={styles.name}>{name}</h3>
              {description && <Markdown className={styles.description}>{description}</Markdown>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamIntroduction;
