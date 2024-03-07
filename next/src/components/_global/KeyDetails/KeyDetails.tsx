import styles from './KeyDetails.module.scss';
import Markdown from '@/components/ui/markdown';
import type { Props } from './KeyDetails.types';

const KeyDetails = ({ list }: Props) => {
  return (
    <section className={styles['KeyDetails']}>
      {list.map(({ title, description }, i) => (
        <div
          key={i}
          className={styles.item}
        >
          {BorderLeft}
          <div className={styles.content}>
            <Markdown.h3>{title}</Markdown.h3>
            <Markdown>{description}</Markdown>
          </div>
        </div>
      ))}
    </section>
  );
};

export default KeyDetails;

const BorderLeft = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='100%'
    viewBox='0 0 21 156'
    fill='none'
    preserveAspectRatio='xMidYMid meet'
    className={styles.borderLeft}
  >
    <path
      fill='#53BAFD'
      d='M19 .284H1V155.79h16L1 148.75v-141.8L19 .284z'
    ></path>
    <path
      stroke='#53BAFD'
      d='M1 7.12V.284h18L1 7.12zm0 0v141.8m0 0v6.72h16L1 148.75z'
    ></path>
  </svg>
);
