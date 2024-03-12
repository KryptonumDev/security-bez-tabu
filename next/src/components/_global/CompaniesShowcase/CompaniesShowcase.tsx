import styles from './CompaniesShowcase.module.scss';
import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import type { CompaniesShowcaseTypes } from './CompaniesShowcase.types';

const CompaniesShowcase = ({ list, heading }: CompaniesShowcaseTypes) => {
  return (
    <section className={styles['CompaniesShowcase']}>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
      </header>
      <ul>
        {list.map(({ img, name, href }, i) => {
          const Element = () => (
            <>
              <Img
                data={img}
                sizes=''
              />
              <p>{name}</p>
            </>
          );
          return (
            <li key={i}>
              {href ? (
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Element />
                </a>
              ) : (
                <Element />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CompaniesShowcase;
