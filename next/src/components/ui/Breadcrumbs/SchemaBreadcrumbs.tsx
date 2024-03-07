import { DOMAIN } from '@/global/constants';
import type { BreadcrumbsType } from './Breadcrumbs.types';

const SchemaBreadcrumbs = ({ data }: BreadcrumbsType) => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            data.map(({ name, path }, i) => ({
              '@type': 'ListItem',
              position: ++i,
              name: name,
              item: `${DOMAIN}${path}`,
            })),
          ],
        }),
      }}
    />
  );
};

export default SchemaBreadcrumbs;
