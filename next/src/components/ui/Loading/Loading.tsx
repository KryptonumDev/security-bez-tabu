import styles from '../Newsletter.module.scss';
import type { LoadingTypes } from './Loading.types';

const Loading = ({ sending }: LoadingTypes) => {
  return (
    sending && (
      <div className={styles['Loading']}>
        <LoaderIcon className={styles.LoaderIcon} />
      </div>
    )
  );
};

export default Loading;

const LoaderIcon = ({ ...props }) => (
  <svg
    viewBox='25 25 50 50'
    {...props}
  >
    <circle
      cx='50'
      cy='50'
      r='20'
      fill='none'
      stroke='currentColor'
      strokeWidth='5'
    />
  </svg>
);
