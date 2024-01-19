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
    width='355'
    height='357'
    viewBox='0 0 355 357'
    fill='none'
    {...props}
  >
    <path
      fill='url(#gear)'
      d='M347.85 224.919a171.53 171.53 0 01-34.673 66.322c-16.298 19.286-36.652 37.699-59.611 48.21l-7.14-15.596c20.662-9.46 38.981-26.328 53.65-43.686a154.384 154.384 0 0031.205-59.69l16.569 4.44z'
    ></path>
    <path
      fill='url(#gear)'
      d='M270.89 28.02a171.53 171.53 0 0183.365 119.948l-16.913 2.86a154.388 154.388 0 00-75.029-107.952l8.577-14.856z'
    ></path>
    <path
      fill='url(#gear)'
      d='M66.23 42.228c18.743-16.92 41.978-27.517 66.142-34.846a171.532 171.532 0 0174.63-5.575l-2.484 16.972a154.383 154.383 0 00-67.168 5.018c-21.747 6.596-42.757 15.937-59.626 31.164L66.23 42.228z'
    ></path>
    <path
      fill='url(#gear)'
      d='M15.155 249.336a171.537 171.537 0 013.95-146.019l15.318 7.72a154.388 154.388 0 00-3.556 131.418l-15.712 6.881z'
    ></path>
    <path
      fill='url(#gear)'
      d='M179.643 356.981a171.53 171.53 0 01-133.035-60.322l13.06-11.12a154.386 154.386 0 00119.733 54.29l.242 17.152z'
    ></path>
    <defs>
      <linearGradient
        id='gear'
        x1='0.748'
        x2='354.255'
        y1='178.498'
        y2='178.498'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#53BAFD'></stop>
        <stop offset='1' stopColor='#53BAFD' stopOpacity='0'></stop>
      </linearGradient>
    </defs>
  </svg>
)