import styles from './Benefits.module.scss';
import Heading from './_Heading';
import Item from './_Item';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import type { Props } from './Benefits.types';

const Benefits = ({ heading, list }: Props) => {
  return (
    <section className={styles['Benefits']}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ title, description, img }, i) => (
          <Item
            key={i}
            index={i}
          >
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
