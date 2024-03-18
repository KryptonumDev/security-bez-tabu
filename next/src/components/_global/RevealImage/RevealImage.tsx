import styles from './RevealImage.module.scss';
import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import type { RevealImageTypes } from './RevealImage.types';

const RevealImage = ({ heading, paragraph, img }: RevealImageTypes) => {
  return (
    <section className={styles['RevealImage']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.img}>
        <div className='borderLeft'></div>
        <div className={`borderRight ${styles.borderRight}`}></div>
        <CuttedEdgeIcon className={styles.CuttedEdgeIcon} />
        <Img
          data={img}
          sizes='410px'
        />
        <label className={styles.overlay}>
          <input type='checkbox' />
          <EyeIcon className={styles.EyeIcon} />
          <p>Kliknij aby zobaczyć</p>
        </label>
      </div>
    </section>
  );
};

export default RevealImage;

const EyeIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    viewBox='0 0 40 40'
    fill='none'
    stroke='#53BAFD'
    {...props}
  >
    <path
      d='M36.667 20s-5 10-16.667 10C8.333 30 3.333 20 3.333 20s5-10 16.667-10c11.667 0 16.667 10 16.667 10Z'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
    <circle
      cx={20}
      cy={20}
      r={5}
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const CuttedEdgeIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={225}
    height={38}
    viewBox='0 0 225 38'
    fill='#0D111F'
    {...props}
  >
    <path d='M224.5 37.5V0H0l31.5 37.5h193Z' />
  </svg>
);
