import styles from './ImageReactor.module.scss';
import type { ImageReactorTypes } from './ImageReactor.types';

const ImageReactor = ({ heading, paragraph, cta, additionalInfo, img, isHighlighted }: ImageReactorTypes) => {
  return <section className={styles['ImageReactor']}></section>;
};

export default ImageReactor;
