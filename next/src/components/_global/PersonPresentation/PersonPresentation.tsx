import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './PersonPresentation.module.scss';
import type { PersonPresentationTypes } from './PersonPresentation.types';

const PersonPresentation = ({ heading, img, subheading, achievements, paragraph }: PersonPresentationTypes) => {
  return (
    <section className={styles['PersonPresentation']}>
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
          {achievements.map(({ title, icon }, i) => (
            <li key={i}>
              <div className={styles.icon}>
                <Img
                  data={icon}
                  sizes=''
                />
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

export default PersonPresentation;
