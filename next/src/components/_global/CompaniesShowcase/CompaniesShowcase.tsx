import Link from 'next/link';
import styles from './CompaniesShowcase.module.scss';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import type { Props } from './CompaniesShowcase.types';

const CompaniesShowcase = ({ list, heading }: Props) => {
  return (
    <section className={styles['CompaniesShowcase']}>
      <Markdown.h2>{heading}</Markdown.h2>
      {list.map(({ img, name, href }, index) => (
        <Link
          href={href}
          key={index}
        >
          <Img
            data={img}
            sizes=''
          />
          <Markdown>{name}</Markdown>
        </Link>
      ))}
    </section>
  );
};

export default CompaniesShowcase;
