import React from 'react';
import { domain } from '../constants';

const SchemaBreadcrumbs = ({ data }: {data:{name: string; path?: string;}[]}) => {
  return (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html:
      JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            data.map(({ name, path = '' }, i) => ({
              '@type': 'ListItem',
              position: ++i,
              name: name,
              item: `${domain}${path}`,
            })),
          ],
        }),
      }}
    />
  );
};

export default SchemaBreadcrumbs;
