import styles from './TeamIntroduction.module.scss';
import type { TeamIntroductionTypes } from './TeamIntroduction.types';

const TeamIntroduction = ({ heading, paragraph, list }: TeamIntroductionTypes) => {
  console.log(heading, paragraph, list);
  return <section className={styles['TeamIntroduction']}></section>;
};

export default TeamIntroduction;
