import Markdown from '@/components/atoms/Markdown';
import styles from './styles.module.scss';
import Img from '@/components/atoms/Img';

const Certificate = ({
  heading,
  paragraph,
  img,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.img}>
        <Img data={img} />
        <Border className={styles.border} />
        <Gear className={styles.gear} />
      </div>
    </section>
  );
};

export default Certificate;

const Border = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='379'
    height='379'
    fill='none'
    viewBox='0 0 379 379'
    {...props}
  >
    <circle
      cx='189.498'
      cy='189.498'
      r='188.919'
      stroke='url(#border)'
      strokeWidth='1.158'
    ></circle>
    <defs>
      <linearGradient
        id='border'
        x1='0'
        x2='378.996'
        y1='189.498'
        y2='189.498'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#53BAFD'></stop>
        <stop offset='1' stopColor='#53BAFD' stopOpacity='0'></stop>
      </linearGradient>
    </defs>
  </svg>
)

const Gear = ({ ...props }) => (
  <svg
      xmlns='http://www.w3.org/2000/svg'
      width='345'
      height='357'
      viewBox='0 0 345 357'
      fill='none'
      {...props}
    >
      <path
        fill='url(#gear)'
        d='M341.489 228.003a173.69 173.69 0 01-95.47 112.973l-7.23-15.793a156.329 156.329 0 0085.923-101.675l16.777 4.495z'
      ></path>
      <path
        fill='url(#gear)'
        d='M260.561 32.628a173.697 173.697 0 0184.414 121.456l-17.126 2.897a156.327 156.327 0 00-75.973-109.31l8.685-15.043z'
      ></path>
      <path
        fill='url(#gear)'
        d='M57.327 45.015A173.695 173.695 0 01198.87 2.085l-2.516 17.186A156.32 156.32 0 0068.966 57.908L57.327 45.015z'
      ></path>
      <path
        fill='url(#gear)'
        d='M14.61 252.727a173.69 173.69 0 014-147.856l15.51 7.818a156.326 156.326 0 00-3.6 133.07l-15.91 6.968z'
      ></path>
      <path
        fill='url(#gear)'
        d='M176.167 356.726a173.681 173.681 0 01-74.181-15.485 173.676 173.676 0 01-60.528-45.596l13.225-11.259a156.335 156.335 0 00121.238 54.973l.246 17.367z'
      ></path>
      <defs>
        <linearGradient
          id='gear'
          x1='0.021'
          x2='344.975'
          y1='178.499'
          y2='178.499'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#53BAFD'></stop>
          <stop offset='1' stopColor='#53BAFD' stopOpacity='0'></stop>
        </linearGradient>
      </defs>
    </svg>
)