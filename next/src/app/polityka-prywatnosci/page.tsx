import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/_pages/PrivacyPolicy/Hero';
import Content from '@/components/_pages/PrivacyPolicy/Content';
import { PageQueryType } from './page.types';

const bradcrumbs = {
  name: 'Polityka prywatności',
  path: '/polityka-prywatnosci',
};

const PrivacyPolicyPage = async () => {
  const { hero_Heading, hero_Paragraph, content } = await query();

  return (
    <>
      <Breadcrumbs
        data={[bradcrumbs]}
        visible={false}
      />
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
        }}
      />
      <Content {...{ content }} />
    </>
  );
};

export default PrivacyPolicyPage;

const query = async (): Promise<PageQueryType> => {
  return await sanityFetch<PageQueryType>({
    query: /* groq */ `
      *[_id == 'PrivacyPolicyPage'][0] {
        hero_Heading,
        hero_Paragraph,
        content[] {
          title,
          description[],
        },
      }
    `,
    tags: ['PrivacyPolicyPage'],
  });
};

export const generateMetadata = async () => {
  return await QueryMetadata('PrivacyPolicyPage', bradcrumbs.name);
};
