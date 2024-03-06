import sanityFetch from '@/utils/sanity.fetch';
import Seo from '@/global/Seo';
import type { Metadata } from 'next';
import type { SeoQueryType } from './Seo.types';

/**
 * Performs a SEO query.
 * @param {string} name - The name of the SEO query for GROQ, it will be: `*[_id == "${name}"][0]` or `* [_type=='${name}' && slug.current == $slug][0]` if the `dynamicSlug` will be provided.
 * @param {string} path - The cannonical path for the URL.
 * @param {string} [dynamicSlug] - Optional. Used to query dynamic pages, like blog posts.
 * @returns {Promise<Metadata>} Returns a promise of the SEO object.
 */
export const QueryMetadata = async (name: string, path: string, dynamicSlug: string): Promise<Metadata> => {
  const customQuery = dynamicSlug ? `*[_id == "${name}"][0]` : `*[_type == '${name}' && slug.current == $slug][0]`;

  const {
    seo: { title, description },
  } = await query(customQuery, dynamicSlug);

  return Seo({
    title,
    description,
    path: path,
  });
};

const query = async (customQuery: string, dynamicSlug: string): Promise<SeoQueryType> => {
  return await sanityFetch<SeoQueryType>({
    query: /* groq */ `
      ${customQuery} {
        seo {
          title,
          description,
        },
      }
    `,
    ...(dynamicSlug && { params: { slug: dynamicSlug } }),
  });
};
