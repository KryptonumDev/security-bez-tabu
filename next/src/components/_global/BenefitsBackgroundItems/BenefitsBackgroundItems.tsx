import Markdown from '@/components/ui/markdown';
import styles from './BenefitsBackgroundItems.module.scss';
import type { BenefitsBackgroundItemsTypes } from './BenefitsBackgroundItems.types';
import Heading from './_Heading';
import Item from './_Item';
import Img from '@/components/ui/image';

const BenefitsBackgroundItems = ({ heading, list }: BenefitsBackgroundItemsTypes) => {
  return (
    <section className={styles['BenefitsBackgroundItems']}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ icon, title, paragraph }, i) => (
          <Item
            key={i}
            index={i}
          >
            <div className={styles.icon}>
              <Img
                data={icon}
                sizes=''
              />
            </div>
            <Markdown.h3>{title}</Markdown.h3>
            <Markdown>{paragraph}</Markdown>
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default BenefitsBackgroundItems;
