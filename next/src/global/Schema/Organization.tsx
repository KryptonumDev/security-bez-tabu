import React from 'react';
import { domain } from '@/global/constants';
import sanityFetch from '@/utils/sanity.fetch';

const SchemaOrganization = async () => {
  const {
    seo,
    global: { email, phone, instagram, facebook },
  }: {
    seo?: { description: string; title: string };
    global?: { email?: string; phone?: number; instagram?: string; facebook?: string };
  } = await query();

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: seo?.title,
          url: `${domain}`,
          email: email || '',
          telephone: phone || '',
          logo: `${domain}/wyzwanie-security.png`,
          image: `${domain}/wyzwanie-security.png`,
          description: seo?.description,
          OpeningHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '00:00',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: email,
            },
          ],
          sameAs: [instagram || '', facebook || ''],
        }),
      }}
    />
  );
};

export default SchemaOrganization;

const query = async () => {
  const data = await sanityFetch({
    query: /* groq */ `
    *[_id == "WyzwanieSecurity_IndexPage"][0] {
      seo {
        title,
        description
      },
      "global": *[_id=="global"][0] {
        email,
        phone,
        instagram,
        facebook,
      }
    }
  `,
  });
  return data;
};