import Seo, { Seo_Query } from '@/global/Seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Hero from '@/components/_index/Hero';
import Components, { Components_Query } from '@/components/Components';
import sanityFetch from '@/utils/sanity.fetch';
import { type HomePageQueryProps } from '@/global/types';

const IndexPage = async () => {
  const { hero_Heading, hero_Paragraph, hero_Claim, hero_Cta, hero_AdditionalInfo, hero_Img, hero_Products, content } =
    await getData();
  return (
    <>
      <Breadcrumbs visible={false} />
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          claim: hero_Claim,
          cta: hero_Cta,
          additionalInfo: hero_AdditionalInfo,
          img: hero_Img,
          products: hero_Products,
        }}
      />
      <Components data={content} />
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
async function getData(): Promise<HomePageQueryProps> {
  const data = await sanityFetch<HomePageQueryProps>({
    query: /* groq */ `
  *[_id=="WyzwanieSecurity_IndexPage"][0] {
    hero_Heading,
    hero_Paragraph,
    hero_Claim,
    hero_Cta {
      theme,
      text,
      href
    },
    hero_AdditionalInfo,
    hero_Img {
      asset -> {
        altText,
        url,
        metadata {
        lqip,
          dimensions {
            width,
            height
          }
        }
      }
    },
    hero_Products[] {
      title,
      description,
      img {
        asset -> {
          altText,
          url,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    ${Components_Query}
    ${Seo_Query}
    }
  `,
    isDraftMode: true,
  });
  return data;
}

export default IndexPage;
