import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';
import Markdown from '@/components/atoms/Markdown';

const Author = ({
  heading,
  img,
  subheading,
  achievements,
  paragraph,
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.img}>
        <Img data={img} />
      </div>
      <Markdown.h3>{subheading}</Markdown.h3>
      <div className={styles.copy}>
        <ul>
          {achievements.map(({ title, img }, i) => (
            <li key={i}>
              <div className={styles.icon}>
                <Img data={img} />
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