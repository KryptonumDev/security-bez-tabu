import Markdown from '@/components/ui/markdown';
import styles from './CompaniesDescriptiveShowcase.module.scss';
import type { CompaniesDescriptiveShowcaseTypes } from './CompaniesDescriptiveShowcase.types';

const CompaniesDescriptiveShowcase = ({ heading }: CompaniesDescriptiveShowcaseTypes) => {
  return (
    <section className={styles['CompaniesDescriptiveShowcase']}>
      <Markdown.h2>{heading}</Markdown.h2>
    </section>
  );
};

export default CompaniesDescriptiveShowcase;
