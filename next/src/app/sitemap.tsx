import sanityFetch from '@/utils/sanity.fetch';
import { DOMAIN } from '@/global/constants';
import type { MetadataRoute } from 'next';

type FetchType = {
  landings: {
    slug: string;
  }[];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { landings } = await query();
  const sitemap = [
    ...landings.map(({ slug }) => ({
      url: `${DOMAIN}/${slug}`,
      lastModified: new Date(),
    })),
  ];
  return sitemap;
}

const query = async (): Promise<FetchType> => {
  return await sanityFetch<FetchType>({
    query: /* groq */ `
      {
        'landings': *[_type == 'landingPage_Collection'] {
          'slug': slug.current
        }
      }
    `,
    tags: ['landingPage_Collection'],
  });
};
