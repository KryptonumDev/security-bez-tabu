'use server';

import Markdown from '@/components/ui/markdown';
import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Img from '@/components/atoms/Img';
import Countdown from '@/components/moleculas/countdown';

const Hero = ({
  heading,
  paragraph,
  claim,
  cta,
  additionalInfo,
  img,
  products,
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <div>
          <Markdown className={styles.paragraph}>{paragraph}</Markdown>
          <p className={styles.claim}>{claim}</p>
          <Button data={cta} className={styles.btn} />
          <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>
          {/* <Countdown className={styles.countdown} /> */}
        </div>
      </header>
      <div className={styles.orbit}>
        <div></div>
        <div>
          <div
            className={styles.product}
            title={`${products[0].title} - ${products[0].description}`}
          >
            <div>
              <Img
                data={products[0].img}
                sizes="124px"
                priority={true}
              />
            </div>
          </div>
          <div
            className={styles.product}
            title={`${products[1].title} - ${products[1].description}`}
          >
            <div>
              <Img
                data={products[1].img}
                sizes="124px"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={styles.product}
            title={`${products[2].title} - ${products[2].description}`}
          >
            <div>
              <Img
                data={products[2].img}
                sizes="124px"
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <div>
            <Img
              data={img}
              sizes="33vw, (min-width: 1280px) 280px"
              priority={true}
            />
          </div>
        </div>
        <div className={styles.decorative}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ animationDelay: `-${4 + Math.random() * 4}s` }} />
          ))}
        </div>
      </div>
      <Glow className={styles.glow} />
    </section>
  );
};

export default Hero;

const Glow = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='316'
    height='388'
    fill='none'
    viewBox='0 0 316 388'
    {...props}
  >
    <path
      fill='#25A7FD'
      fillOpacity='0.12'
      d='M121.028 58.623c0-121.95 83.326-18.794 130.841 0 129.089 51.057 50.558 298.774-143.544 325.197-194.102 26.422-68.676-95.73-66.056-165.139 2.628-69.615 78.759-38.109 78.759-160.058z'
    ></path>
  </svg>
)