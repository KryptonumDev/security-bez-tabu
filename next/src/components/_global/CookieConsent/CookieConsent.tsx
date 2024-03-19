import sanityFetch from '@/utils/sanity.fetch';
import styles from './CookieConsent.module.scss';
import Content from './_Content';
import type { QueryType } from './CookieConsent.types';

const tabs = ['Zgoda', 'Szczegóły', 'O cookies'];

const CookieConsent = async () => {
  const { CookieConsent } = await query();

  return (
    <aside className={styles['CookieConsent']}>
      <Content
        tabs={tabs}
        TabActiveIcon={TabActiveIcon}
        {...CookieConsent}
      />
    </aside>
  );
};

export default CookieConsent;

const TabActiveIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={8}
    viewBox='0 0 10 8'
    fill='none'
  >
    <path
      d='m1 4 2.5 2.5L9 1'
      stroke='#C4CDD9'
      strokeLinecap='round'
    />
  </svg>
);

const query = async (): Promise<QueryType> => {
  return await sanityFetch<QueryType>({
    query: /* groq */ `
      *[_type == "global"][0]{
        CookieConsent {
          consent_Heading,
          consent_Paragraph,
          details {
            necessary[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            necessary_Description,
            statistical[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            statistical_Description,
            marketing[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            marketing_Description,
            preferences[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            preferences_Description,
            unclassified[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            unclassified_Description,
          },
          info_Heading,
          info_Paragraph,
        }
      }
    `,
    tags: ['global'],
  });
};
