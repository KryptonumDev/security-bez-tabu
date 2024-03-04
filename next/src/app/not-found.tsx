import Hero from '@/components/_notFound/Hero';
import Seo, { Seo_Query } from '@/global/Seo';
import { type NotFoundPageQueryProps } from '@/global/types';
import sanityFetch from '@/utils/sanity.fetch';

const NotFoundPage = async () => {
  const { hero_Heading, hero_Paragraph, hero_Cta, hero_Img } = await getData();

  return (
    <>
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          cta: hero_Cta,
          img: hero_Img,
        }}
      />
    </>
  );
};

export async function generateMetadata() {
  const { seo } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '',
  });
}

const getData = async () => {
  const data = await sanityFetch({
    query: /* groq */ `
    *[_id == "NotFoundPage"][0] {
      hero_Heading,
      hero_Paragraph,
      hero_Cta {
        theme,
        href,
        text
      },
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
      ${Seo_Query}
    }
  `,
    isDraftMode: true,
  });
  return data as NotFoundPageQueryProps;
};

export default NotFoundPage;
