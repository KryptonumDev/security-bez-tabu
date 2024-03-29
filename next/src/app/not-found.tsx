import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import Hero from '@/components/_pages/NotFound/Hero';
import { Img_Query } from '@/components/ui/image';
import { Cta_Query } from '@/components/ui/Button';
import type { CtaType, ImgType } from '@/global/types';
import Header from '@/components/_landing/Header';

type PageQueryType = {
  hero_Heading: string;
  hero_Paragraph: string;
  hero_Cta: CtaType;
  hero_Img: ImgType;
};

const NotFoundPage = async () => {
  const { hero_Heading, hero_Paragraph, hero_Cta, hero_Img } = await getData();

  return (
    <>
      <Header />
      <main>
        <Hero
          {...{
            heading: hero_Heading,
            paragraph: hero_Paragraph,
            cta: hero_Cta,
            img: hero_Img,
          }}
        />
      </main>
    </>
  );
};

export default NotFoundPage;

const getData = async (): Promise<PageQueryType> => {
  return await sanityFetch<PageQueryType>({
    query: /* groq */ `
      *[_id == "NotFoundPage"][0] {
        hero_Heading,
        hero_Paragraph,
        hero_Cta {
          ${Cta_Query}
        },
        hero_Img {
          ${Img_Query}
        },
      }
    `,
    tags: ['NotFoundPage'],
  });
};

export const generateMetadata = async () => await QueryMetadata('NotFoundPage', '404');
