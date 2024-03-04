import Seo, { Seo_Query } from '@/global/Seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import sanityFetch from '@/utils/sanity.fetch';
import { type PrivacyPolicyPageQueryProps } from '@/global/types';
import Hero from '@/components/_privacyPolicy/Hero';
import Content from '@/components/_privacyPolicy/Content';

const PrivacyPolicyPage = async () => {
  const { hero_Heading, hero_Paragraph, content } = await getData();

  return (
    <>
      <Breadcrumbs
        data={[
          {
            name: 'Polityka prywatności',
            path: '/polityka-prywatnosci',
          },
        ]}
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

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/',
  });
}

export default PrivacyPolicyPage;

const getData = async () => {
  const data: PrivacyPolicyPageQueryProps = await sanityFetch({
    query: /* groq */ `
    *[_id=='PrivacyPolicyPage'][0] {
        hero_Heading,
        hero_Paragraph,
        content[] {
          title,
          description[]
        }
      }
    `,
    isDraftMode: true,
  });

  return data;
};

async function getMetadata() {
  const data = await sanityFetch<PrivacyPolicyPageQueryProps>({
    query: /* groq */ `
    *[_id=='PrivacyPolicyPage'][0] {
      ${Seo_Query}
    }
    `,
    isDraftMode: true,
  });
  return data;
}
