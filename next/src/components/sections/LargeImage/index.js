import Img from '@/components/atoms/Img';
import styles from './styles.module.scss';

const LargeImage = ({ img }) => {
  return (
    <section className={styles.largeImage}>
      <Img data={img} sizes='100vw' />
    </section>
  );
};

export default LargeImage;