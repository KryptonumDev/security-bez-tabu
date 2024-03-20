import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './ImageReactor.module.scss';
import type { ImageReactorTypes } from './ImageReactor.types';
import ChipsAnimation from '@/components/ui/ChipsAnimation';

const ImageReactor = ({ heading, paragraph, cta, additionalInfo, img, isHighlighted }: ImageReactorTypes) => {
  return (
    <section
      className={styles['ImageReactor']}
      data-highlighted={!!isHighlighted}
    >
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        {cta && (
          <div className={styles.ctaBox}>
            <Button
              data={cta}
              className={styles.cta}
            />
            {additionalInfo && <Markdown className={styles.additionalInfo}>{additionalInfo}</Markdown>}
          </div>
        )}
      </header>
      <div className={styles.img}>
        <Elipse className={styles.Elipse} />
        <Img
          data={img}
          sizes='300px'
        />
      </div>
      <ChipsAnimation
        positionX='left'
        positionY='top'
      />
    </section>
  );
};

export default ImageReactor;

const Elipse = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={357}
    height={358}
    viewBox='0 0 357 358'
    fill='url(#Elipse)'
    {...props}
  >
    <path d='M350.531 224.952c-6.6 24.39-18.556 47.036-35.015 66.322s-37.015 37.699-60.2 48.21l-7.211-15.596c20.867-9.46 39.367-26.328 54.18-43.686 14.813-17.357 25.574-37.739 31.513-59.69l16.733 4.44Z' />
    <path d='M272.811 28.053c22.083 12.626 41.08 29.923 55.633 50.657A170.614 170.614 0 0 1 357 148.001l-17.08 2.861A153.572 153.572 0 0 0 314.219 88.5c-13.098-18.661-30.195-34.228-50.07-45.591l8.662-14.855Z' />
    <path d='M66.13 42.261c18.928-16.92 42.392-27.517 66.794-34.846a174.873 174.873 0 0 1 75.368-5.575l-2.509 16.973a157.386 157.386 0 0 0-67.831 5.018c-21.962 6.595-43.18 15.936-60.215 31.163L66.129 42.261Z' />
    <path d='M14.55 249.369A170.082 170.082 0 0 1 .062 175.918 170.196 170.196 0 0 1 18.54 103.35l15.469 7.721a153.175 153.175 0 0 0-16.628 65.311 153.074 153.074 0 0 0 13.038 66.106l-15.869 6.881Z' />
    <path d='M180.663 357.014a174.693 174.693 0 0 1-73.984-15.292c-23.223-10.428-43.836-25.804-60.366-45.03l13.19-11.12c14.877 17.304 33.429 31.142 54.33 40.527a157.217 157.217 0 0 0 66.585 13.763l.245 17.152Z' />
    <defs>
      <linearGradient
        id='Elipse'
        x1={0}
        y1={178.531}
        x2={357}
        y2={178.531}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#53BAFD' />
        <stop
          offset={1}
          stopColor='#53BAFD'
          stopOpacity={0}
        />
      </linearGradient>
    </defs>
  </svg>
);
