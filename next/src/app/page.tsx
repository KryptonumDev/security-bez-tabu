import Seo from '@/global/Seo';
import Breadcrumbs from '@/components/moleculas/Breadcrumbs';
import Hero from '@/components/sections/index-hero';
import Components from '@/components/Components';
import sanityFetch from '@/utils/sanity.fetch';
import { type HomePageQueryProps } from '@/global/types';

const IndexPage = async () => {
  const { hero_Heading, hero_Paragraph, hero_Claim, hero_Cta, hero_AdditionalInfo, hero_Img, hero_Products, content } =
    await getData();
  return (
    <>
      <Breadcrumbs visible={false} />
      <Hero
        {...{
          heading: hero_Heading,
          paragraph: hero_Paragraph,
          claim: hero_Claim,
          cta: hero_Cta,
          additionalInfo: hero_AdditionalInfo,
          img: hero_Img,
          products: hero_Products,
        }}
      />
      <Components data={content} />
    </>
  );
};

export async function generateMetadata() {
  const { seo } = await getData();
  return Seo({
    title: seo?.title,
    description: seo?.description,
    path: '/',
  });
}
export async function getData() {
  const data = await sanityFetch({
    query: /* groq */ `
  *[_id=="WyzwanieSecurity_IndexPage"][0] {
    hero_Heading,
    hero_Paragraph,
    hero_Claim,
    hero_Cta {
      theme,
      text,
      href
    },
    hero_AdditionalInfo,
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
    hero_Products[] {
      title,
      description,
      img {
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
      }
    },
    content[] {
      _type,
      _type == 'Benefits' => @ {
        heading,
        list[] {
          description,
          title,
          img {
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
          }
        }
      },
      _type == 'Perks' => @ {
        heading,
        list[] {
          description,
          title
        }
      },
     _type == 'CtaSection' => @ {
       isCountdown,
        heading,
        additionalInfo,
        cta {
          theme,
          href,
          text
        }
     },
    _type == 'StatsList' => @ {
      list[] {
        number,
        name
      }
    },
    _type == 'Recipients' => @ {
      heading,
      list[] {
        title,
        img {
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
        }
      }
    },
    _type == 'Reviews' => @ {
      heading,
      list[] {
        name,
        position,
        content,
        img {
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
        }
      }
    },
    _type == 'Idea' => {
      paragraph,
      additionalInfo,
      chartParagraph,
      heading,
      claim,
      chart[] {
        title,
        description
      },
      cta {
        href,
        text,
        theme
      }
    },
    _type == 'Certificate' => @ {
      paragraph,
        heading,
        img {
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
        }
      },
      _type == 'Lessons' => @ {
        paragraph,
        heading,
        list[] {
          title,
          lessons[]
        }
      },
     _type == 'Faq' => @ {
        heading,
        paragraph,
         list[] {
           description,
           title
         }
     },
          _type == 'Author' => @ {
            paragraph,
            heading,
            subheading,
            achievements[] {
                title,
                img {
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
                }
              },
            img {
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
            }
          },
      _type == 'LargeImage' => @ {
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
      _type == 'Charts' => @ {
        charts[] {
          title,
          _type,
          _type == 'chart_Bars' => @ {
            charts[] {
              title, 
              number
            }
          },
          _type == 'chart_Linear' => @ {
            isAngle,
              item {
                number,
                title
              }
          },
          _type == 'chart_Circle' => @ {
            item {
              number,
                title
            }
          }
          }
        }
      },
        seo {
        descripition,
        title
      }
    }
  `,
    isDraftMode: true,
  });
  return data as HomePageQueryProps;
}

export default IndexPage;