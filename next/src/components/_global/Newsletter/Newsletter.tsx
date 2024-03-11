import styles from './Newsletter.module.scss';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import Form from './Form';
import type { NewsletterTypes } from './Newsletter.types';

const Newsletter = ({ heading, paragraph, image }: NewsletterTypes) => {
  return (
    <section className={styles['Newsletter']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <Img
        data={image}
        sizes=''
      />
      <Form StatusIcon={StatusIcon} />
    </section>
  );
};

export default Newsletter;

const StatusIcon = {
  Success: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='33'
      fill='none'
      viewBox='0 0 32 33'
    >
      <path
        stroke='#82DEAC'
        strokeWidth='1.5'
        d='M2.667 16.5c0-6.286 0-9.428 1.952-11.38C6.572 3.165 9.714 3.165 16 3.165c6.286 0 9.429 0 11.382 1.953 1.952 1.953 1.952 5.095 1.952 11.38 0 6.286 0 9.429-1.952 11.382-1.953 1.952-5.096 1.952-11.381 1.952-6.286 0-9.428 0-11.38-1.952-1.954-1.953-1.954-5.096-1.954-11.381z'
        opacity='0.5'
      ></path>
      <path
        stroke='#82DEAC'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.334 17.166L14 19.834l6.667-6.666'
      ></path>
    </svg>
  ),
  Error: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='33'
      fill='none'
      viewBox='0 0 32 33'
    >
      <path
        stroke='#F19D9D'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16 9.834v8'
      ></path>
      <circle
        cx='16'
        cy='21.833'
        r='1.333'
        fill='#F19D9D'
      ></circle>
      <path
        stroke='#F19D9D'
        strokeWidth='1.5'
        d='M2.667 16.5c0-6.286 0-9.428 1.952-11.38C6.572 3.165 9.714 3.165 16 3.165c6.286 0 9.429 0 11.382 1.953 1.952 1.953 1.952 5.095 1.952 11.38 0 6.286 0 9.429-1.952 11.382-1.953 1.952-5.096 1.952-11.381 1.952-6.286 0-9.428 0-11.38-1.952-1.954-1.953-1.954-5.096-1.954-11.381z'
        opacity='0.5'
      ></path>
    </svg>
  ),
};
