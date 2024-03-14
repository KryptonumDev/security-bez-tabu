import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import styles from './PlansComparison.module.scss';
import type { PlansComparisonTypes } from './PlansComparison.types';

const PlansComparison = ({ heading, plans }: PlansComparisonTypes) => {
  return (
    <section className={styles['PlansComparison']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <div className={styles.plans}>
        {plans.map(({ isMostPopular, heading, price, features, cta }, i) => (
          <div
            key={i}
            className={styles.item}
            data-mostpopular={!!isMostPopular}
          >
            {isMostPopular && (
              <div className={styles.mostPopular}>
                <MostPopularIcon />
                <span>Najczęściej wybierane</span>
              </div>
            )}
            <div className={styles.header}>
              <h3>{heading}</h3>
              <p className={`h3 ${styles.price}`}>{price}</p>
            </div>
            <ul>
              {features.map((item, i) => (
                <li key={i}>
                  <BulletPointIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button data={cta} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansComparison;

const MostPopularIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={25}
    viewBox='0 0 24 25'
    fill='none'
  >
    <path
      d='M10.08 8.83c1.077-1.932 1.615-2.898 2.42-2.898.805 0 1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004.238.181.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004-.09.293-.06.61.001 1.241l.056.575c.216 2.224.323 3.336-.328 3.83-.651.495-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384-.295 0-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24-.09-.294-.293-.53-.698-1.004l-.369-.431c-1.425-1.667-2.138-2.5-1.89-3.3.25-.8 1.295-1.037 3.386-1.51l.54-.122c.595-.134.892-.202 1.13-.383.239-.18.392-.455.698-1.004l.278-.5Z'
      stroke='#53BAFD'
      strokeWidth={1.5}
    />
    <path
      opacity={0.55}
      d='M4.99 2.932s.288 1.458.92 2.085c.63.627 2.09.905 2.09.905s-1.458.288-2.085.92c-.627.63-.905 2.09-.905 2.09s-.288-1.458-.92-2.085C3.46 6.22 2 5.942 2 5.942s1.458-.288 2.085-.919.905-2.09.905-2.09Z'
      stroke='#92D4FF'
      strokeLinejoin='round'
    />
    <path
      opacity={0.55}
      d='M18 5.932h2m-1 1v-2'
      stroke='#53BAFD'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const BulletPointIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={25}
    viewBox='0 0 24 25'
    fill='none'
  >
    <path
      opacity={0.5}
      d='M2 12.247C2 7.533 2 5.176 3.464 3.71 4.93 2.247 7.286 2.247 12 2.247c4.714 0 7.071 0 8.535 1.464C22 5.176 22 7.533 22 12.247c0 4.714 0 7.07-1.465 8.535-1.464 1.465-3.821 1.465-8.535 1.465s-7.071 0-8.536-1.465C2 19.318 2 16.961 2 12.247Z'
      stroke='#53BAFD'
      strokeWidth={1.5}
    />
    <path
      d='m8.5 12.747 2 2 5-5'
      stroke='#53BAFD'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
