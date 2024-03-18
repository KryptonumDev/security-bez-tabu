import sanityFetch from '@/utils/sanity.fetch';
import { DEFAULT_TITLE, DOMAIN, LOCALE } from '@/global/constants';
import type { Metadata } from 'next';
import type { GlobalQueryTypes, SeoTypes } from './Seo.types';

const Seo = async ({ title, description, path, img, ...props }: SeoTypes): Promise<Metadata> => {
  const { og_Img } = await query();

  const url = `${DOMAIN}${path}`;

  const seo = {
    title: title || DEFAULT_TITLE,
    description: description || '',
    url,
    ogImage: img || og_Img || '',
  };

  const metadata: Metadata = {
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

const query = async (): Promise<GlobalQueryTypes> => {
  return await sanityFetch<GlobalQueryTypes>({
    query: /* groq */ `
      *[_id == "global"][0] {
        "og_Img": seo.og_Img.asset -> url+"?w=1200"
      }
    `,
    tags: ['global'],
  });
};
