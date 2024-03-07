import styles from './Content.module.scss';
import type { Props } from './Content.types';
import Markdown from '@/components/ui/markdown';

const Content = ({ content }: Props) => {
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
