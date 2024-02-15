import Hero from '@/components/sections/not-found-hero';
import Seo from '@/global/Seo';
import sanityFetch from '@/utils/sanity.fetch';

const NotFoundPage = async () => {
  const { hero_Heading, hero_Paragraph, hero_Cta, hero_Img } = await query();

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
  const {
    page: { seo },
  } = await query();
  return Seo({
    title: seo?.title,
    description: seo?.description,
  });
}

const query = async () => {
  const  data = await sanityFetch({
    query: /* groq */ `
    *[_id == "WyzwanieSecurity_NotFoundPage"][0] {
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
      seo {
        title,
        description
      }
    }
  `,
  });
  return data;
};

export default NotFoundPage;
