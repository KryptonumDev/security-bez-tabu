import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';

const Content = ({ content }) => {
  return (
    <section className={styles.wrapper}>
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