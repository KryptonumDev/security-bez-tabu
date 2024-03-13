import Markdown from '@/components/ui/markdown';
import styles from './Content.module.scss';
import type { ContentTypes } from './Content.types';

const Content = ({ content }: ContentTypes) => {
  return (
    <section className={styles['Content']}>
      <ol>
        {content.map(({ title, description }, i) => (
          <li key={i}>
            <p className={styles.title}>{title}</p>
            <ol>
              {description.map((item, i) => (
                <li key={i}>
                  <span>
                    <Markdown>{item}</Markdown>
                  </span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Content;
