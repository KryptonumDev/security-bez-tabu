import Markdown from '@/components/ui/markdown';
import styles from './BenefitsItems.module.scss';
import type { BenefitsItemsTypes } from './BenefitsItems.types';
import Heading from './_Heading';
import Item from './_Item';
import Img from '@/components/ui/image';

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
            <Markdown>{paragraph}</Markdown>
            <Decoration className={styles.decoration} />
          </Item>
        ))}
      </ul>
    </section>
  );
};

export default BenefitsItems;

const Decoration = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='254'
    height='50'
    fill='none'
    viewBox='0 0 254 50'
    {...props}
  >
    <path
      stroke='#0D111F'
      strokeWidth='6'
      d='M248 46.5h3V3H7.062l4.14 4.93 31.5 37.5.9 1.07H248z'
    ></path>
  </svg>
);
