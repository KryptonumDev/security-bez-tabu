import sanityFetch from '@/utils/sanity.fetch';
import { DOMAIN } from '@/global/constants';

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
          url: `${DOMAIN}`,
          email: email || '',
          telephone: phone || '',
          logo: `${DOMAIN}/security-bez-tabu-logo.png`,
          image: `${DOMAIN}/security-bez-tabu-logo.png`,
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
  return await sanityFetch({
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
    tags: ['WyzwanieSecurity_IndexPage', 'global'],
  });
};
