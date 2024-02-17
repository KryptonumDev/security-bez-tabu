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
  const { seo } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/',
  });
}

export default PrivacyPolicyPage;

const getData = async () => {
  const data: PrivacyPolicyPageQueryProps[] = await sanityFetch({
    query: /* groq */ `
    *[_id=='WyzwanieSecurity_PrivacyPolicyPage' || _id=='PrivacyPolicyPage'][] {
      _id == 'WyzwanieSecurity_PrivacyPolicyPage' => {
        hero_Heading,
        hero_Paragraph,
        ${Seo_Query}
      },
      _id == 'PrivacyPolicyPage' => {
        content[] {
          title,
          description[]
        }
      }
    }
    `,
    isDraftMode: true,
  });
  const mappedData = {
    hero_Heading: (data[1] as { hero_Heading: string })?.hero_Heading,
    hero_Paragraph: (data[1] as { hero_Paragraph: string })?.hero_Paragraph,
    seo: (data[1] as { seo: { description: string; title: string } })?.seo,
    content: (data[0] as { content: { title: string; description: string[] }[] })?.content,
  };

  return mappedData as unknown as PrivacyPolicyPageQueryProps;
};
