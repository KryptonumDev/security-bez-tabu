import sanityFetch from '@/utils/sanity.fetch';
import Seo from '@/global/Seo';
import type { Metadata } from 'next';
import type { SeoQueryType } from './Seo.types';

/**
 * Performs a SEO query.
 * @param {string} name - The name of the SEO query for GROQ, it will be: `*[_id == "${name}"][0]`
 * @param {string} path - The cannonical path for the URL.
 * @returns {Promise<Metadata>} Returns a promise of the SEO object.
 */
export const QueryMetadata = async (name: string, path: string): Promise<Metadata> => {
  const {
    seo: { title, description },
  } = await query(name);

  return Seo({
    title,
    description,
    path: path,
  });
};

const query = async (name: string): Promise<SeoQueryType> => {
  return await sanityFetch<SeoQueryType>({
    query: /* groq */ `
      *[_id == "${name}"][0] {
        seo {
          title,
          description,
        },
      }
    `,
  });
};
