import styles from './BadgeIconSection.module.scss';
import type { BadgeIconSectionTypes } from './BadgeIconSection.types';

const BadgeIconSection = ({ icon, heading, paragraph }: BadgeIconSectionTypes) => {
  return <section className={styles['BadgeIconSection']}></section>;
};

export default BadgeIconSection;
