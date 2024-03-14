import styles from './CompaniesDescriptiveShowcase.module.scss';
import type { CompaniesDescriptiveShowcaseTypes } from './CompaniesDescriptiveShowcase.types';

const CompaniesDescriptiveShowcase = ({ heading, paragraph, list }: CompaniesDescriptiveShowcaseTypes) => {
  return <section className={styles['CompaniesDescriptiveShowcase']}></section>;
};

export default CompaniesDescriptiveShowcase;
