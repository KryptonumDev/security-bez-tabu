import styles from './PersonPresentation.module.scss';
import type { PersonPresentationTypes } from './PersonPresentation.types';

const PersonPresentation = ({ heading, img, subheading, achievements, paragraph }: PersonPresentationTypes) => {
  console.log(heading, img, subheading, achievements, paragraph);
  return <section className={styles['PersonPresentation']}></section>;
};

export default PersonPresentation;
