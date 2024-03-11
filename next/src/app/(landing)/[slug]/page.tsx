import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import { QueryMetadata } from '@/global/Seo/query-metadata';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Components, { Components_Query } from '@/components/Components';
import type { generateStaticParamsType } from '@/global/types';
import type { PageQueryType } from './page.types';

export default async function LandingPage({ params: { slug } }: { params: { slug: string } }) {
  const { name, content } = await query(slug);

  return (
    <>
      <Breadcrumbs data={[{ name: name, path: slug }]} />
      <Components data={content} />
    </>
  );
}

const query = async (slug: string): Promise<PageQueryType> => {
  const data = await sanityFetch<PageQueryType>({
    query: /* groq */ `
      *[_type == 'landingPage_Collection' && slug.current == $slug][0] {
        name,
        ${Components_Query}
      }
    `,
    params: { slug },
  });
  !data && notFound();
  return data;
};

export const generateMetadata = async ({ params: { slug } }) => {
  return await QueryMetadata('landingPage_Collection', `/${slug}`, slug);
};

export async function generateStaticParams(): Promise<generateStaticParamsType> {
  const collection = await sanityFetch<generateStaticParamsType>({
    query: /* groq */ `
      *[_type == 'landingPage_Collection'] {
        'slug': slug.current,
      }
    `,
    tags: ['landingPage_Collection'],
  });
  return collection.map(({ slug }) => ({ slug }));
}
