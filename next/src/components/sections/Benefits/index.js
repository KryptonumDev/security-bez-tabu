import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';
import Item from './item';
import Heading from './heading';

const Benefits = ({
  heading,
  list,
}) => {
  return (
    <section className={styles.wrapper}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ title, description, img }, i) => (
          <Item key={i} index={i}>
            <div className={styles.icon}>
              <Img data={img} />
            </div>
            <Markdown.h3>{title}</Markdown.h3>
            <Markdown>{description}</Markdown>
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;