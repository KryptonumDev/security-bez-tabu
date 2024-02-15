import sanityFetch from '@/utils/sanity.fetch';

export const domain = 'https://wyzwanie-security.securitybeztabu.pl';
export const locale = 'pl';

const Seo = async ({ title, description, path, ...props }) => {
  const {
    robotsIndex,
    seo: { og_Img },
  } = await query();

  const seo = {
    title: title || '',
    description: description || '',
    url: `${domain}${path}` || '',
    ogImage: og_Img?.asset?.url || '',
  };

  const metadata = {
    ...(!robotsIndex && {
      robots: {
        index: false,
      },
    }),
    metadataBase: new URL(domain),
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
      locale: locale,
      type: 'website',
    },
    ...props,
  };

  return metadata;
};

export default Seo;

const query = async () => {
  const data = await sanityFetch({
    query: /* groq */ `
    *[_id == "WyzwanieSecurity_Global"][0] {
      robotsIndex,
      seo {
        'og_Img': og_Img.asset -> url+"?w=1200"
      }
    }`,
  });
  return data;
};
