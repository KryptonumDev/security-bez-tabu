import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import List from './list';

const Lessons = ({
  heading,
  paragraph,
  list,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown>{paragraph}</Markdown>
      </header>
      <List list={list} />
    </section>
  );
};

export default Lessons;