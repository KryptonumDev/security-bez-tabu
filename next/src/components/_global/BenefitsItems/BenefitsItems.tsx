import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './BenefitsItems.module.scss';
import type { BenefitsItemsTypes } from './BenefitsItems.types';
import Heading from './_Heading';
import Item from './_Item';

const BenefitsItems = ({ heading, list }: BenefitsItemsTypes) => {
  return (
    <section className={styles['BenefitsItems']}>
      <Heading>
        <Markdown.h2>{heading}</Markdown.h2>
      </Heading>
      <ul>
        {list.map(({ icon, paragraph }, i) => (
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
            <Markdown.h3>{paragraph}</Markdown.h3>
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default BenefitsItems;
