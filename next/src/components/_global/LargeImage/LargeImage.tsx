import Img from '@/components/ui/image';
import styles from './LargeImage.module.scss';
import type { ImgType } from '@/global/types';

const LargeImage = (img: ImgType) => {
  return (
    <section className={styles['LargeImage']}>
      <Img
        data={img}
        sizes='100vw'
      />
    </section>
  );
};

export default LargeImage;
