import styles from './ListPillWithIconHeading.module.scss';
import type { Props } from './ListPillWithIconHeading.types';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';

const ListPillWithIconHeading = ({ heading, list }: Props) => {
  return (
    <section className={styles['ListPillWithIconHeading']}>
      <Markdown.h3>{heading}</Markdown.h3>
      <div>
        {list.map(({ description, img, title }, index) => (
          <div
            key={index}
            className={styles.item}
          >
            <Img data={img} sizes='' />
            <div>
              <Markdown.h4>{title}</Markdown.h4>
              <Markdown>{description}</Markdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListPillWithIconHeading;
