import type { Metadata } from 'next';
import sanityFetch from '@/utils/sanity.fetch';
import { DEFAULT_TITLE, DOMAIN, LOCALE } from '@/global/constants';
import type { GlobalQueryType, SeoType } from './Seo.types';

const Seo = async ({ title, description, path, ...props }: SeoType): Promise<Metadata> => {
  const { robotsIndex, og_Img } = await query();

  const url = `${DOMAIN}${path}`;

  const seo = {
    title: title || DEFAULT_TITLE,
    description: description || '',
    url,
    ogImage: og_Img || '',
  };

  const metadata: Metadata = {
    ...(!robotsIndex && {
      robots: {
        index: false,
      },
    }),
    metadataBase: new URL(DOMAIN),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: LOCALE,
      type: 'website',
    },
    ...props,
  };
  return metadata;
};

export default Seo;

const query = async (): Promise<GlobalQueryType> => {
  return await sanityFetch<GlobalQueryType>({
    query: /* groq */ `
      *[_id == "global"][0] {
        robotsIndex,
        "og_Img": seo.og_Img.asset -> url+"?w=1200"
      }
    `,
  });
};
