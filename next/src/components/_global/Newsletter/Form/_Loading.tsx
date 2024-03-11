import styles from '../Newsletter.module.scss';
import Loader from '@/components/ui/Loader';

const Loading = ({ sending }: { sending: boolean }) => {
  return (
    sending && (
      <div className={styles['Loading']}>
        <Loader />
      </div>
    )
  );
};

export default Loading;
