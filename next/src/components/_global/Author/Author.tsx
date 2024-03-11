import styles from './Author.module.scss';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import type { Props } from './Author.types';

const Author = ({ heading, img, subheading, achievements, paragraph }: Props) => {
  return (
    <section className={styles['Author']}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.img}>
        <Img
          data={img}
          sizes='(min-width: 700px) 33vw, 100vw'
        />
      </div>
      <Markdown.h3>{subheading}</Markdown.h3>
      <div className={styles.copy}>
        <ul>
          {achievements.map(({ title, img }, i) => (
            <li key={i}>
              <div className={styles.icon}>
                <Img data={img} sizes='' />
              </div>
              <Markdown className={styles.title}>{title}</Markdown>
            </li>
          ))}
        </ul>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </div>
    </section>
  );
};

export default Author;
