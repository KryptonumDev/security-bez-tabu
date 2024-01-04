import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const Reviews = ({
  heading,
  list,
}) => {
  list = list.map(({ img, content, ...props }) => ({
    img: <Img data={img} />,
    content: <Markdown>{content}</Markdown>,
    ...props
  }));
  
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul className={styles.list}>
        {list.map(({ img, name, position, content }, i) => (
          <li className={styles.item} key={i}>
            {img}
            <p>{name}</p>
            <p>{position}</p>
            {content}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;