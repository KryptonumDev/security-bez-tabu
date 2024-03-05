import { notFound } from 'next/navigation';
import Seo, { Seo_Query } from '@/global/Seo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Components, { Components_Query } from '@/components/Components';
import sanityFetch from '@/utils/sanity.fetch';
import { type HomePageQueryProps } from '@/global/types';

export async function generateStaticParams() {
  const data = await getStaticParams();
  return data.map(({ slug }) => ({ slug }));
}

export default async function LandingPage({ params: { slug } }: { params: { slug: string } }) {
  const { content } = await getData(slug);
  return (
    <>
      <Breadcrumbs visible={false} />
      <Components data={content} />
    </>
  );
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const { seo } = await getMetadata(slug);
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: `/${slug}`,
  });
}

async function getData(slug: string): Promise<HomePageQueryProps> {
  const data = await sanityFetch<HomePageQueryProps>({
    query: /* groq */ `
  *[_type=='landingPage_Collection' && slug.current == $slug] [0] {
    ${Components_Query}
    }
  `,
    params: { slug },
    isDraftMode: true,
  });
  if (!data) {
    notFound();
  }
  return data;
}

async function getMetadata(slug: string) {
  const data = await sanityFetch<HomePageQueryProps>({
    query: /* groq */ `
    *[_type=='landingPage_Collection' && slug.current == $slug] [0] {
      ${Seo_Query}
    }
    `,
    params: { slug },
    isDraftMode: true,
  });
  if (!data) {
    notFound();
  }
  return data;
}

async function getStaticParams() {
  const data = await sanityFetch<{ slug: string }[]>({
    query: /* groq */ `
    *[_type=='landingPage_Collection'] {
      'slug': slug.current
    }
  `,
    isDraftMode: true,
  });
  return data;
}
