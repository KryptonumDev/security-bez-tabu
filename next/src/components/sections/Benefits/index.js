import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const Benefits = ({
  heading,
  list,
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2>{heading}</Markdown.h2>
      <ul>
        {list.map(({ title, description, img }, i) => (
          <li key={i}>
            <div className={styles.icon}>
              <Img data={img} />
            </div>
            <Markdown.h3>{title}</Markdown.h3>
            <Markdown>{description}</Markdown>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;