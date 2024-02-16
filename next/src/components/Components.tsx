import Author, { type AuthorProps } from './_global/Author';
import Benefits, { Benefits_Query, type BenefitsProps } from './_global/Benefits';
import Certificate, { type CertificateProps } from './_global/Certificate';
import CtaSection, { type CtaSectionProps } from './_global/CtaSection';
import Faq, { type FaqProps } from './_global/Faq';
import Idea, { type IdeaProps } from './_global/Idea';
import LargeImage from './_global/LargeImage';
import Lessons, { type LessonsProps } from './_global/Lessons';
import Perks, { type PerksProps, Perks_Query } from './_global/Perks';
import Recipients, { type RecipientsProps } from './_global/Recipients';
import Reviews, { type ReviewsProps } from './_global/Reviews';
import Stats, { type StatsProps } from './_global/Stats';
import Charts, { type ChartsProps } from './_global/Charts';
import { type ImgType } from '@/global/types';

type ComponentMap = {
  Benefits: BenefitsProps;
};

export type ComponentProps = ComponentMap[keyof ComponentMap] & { _type: string };

const Components = ({ data }: { data: ComponentProps[] }) => {
  return data?.map((item) => {
    const componentType = item._type as keyof ComponentMap;
    const componentMap: Record<string, React.ReactNode> = {
      Benefits: <Benefits {...(item as BenefitsProps)} />,
      Perks: <Perks {...(item as PerksProps)} />,
      CtaSection: <CtaSection {...(item as unknown as CtaSectionProps)} />,
      StatsList: <Stats {...(item as unknown as StatsProps)} />,
      Recipients: <Recipients {...(item as RecipientsProps)} />,
      Reviews: <Reviews {...(item as unknown as ReviewsProps)} />,
      Idea: <Idea {...(item as unknown as IdeaProps)} />,
      Certificate: <Certificate {...(item as unknown as CertificateProps)} />,
      Lessons: <Lessons {...(item as unknown as LessonsProps)} />,
      Faq: <Faq {...(item as unknown as FaqProps)} />,
      Author: <Author {...(item as unknown as AuthorProps)} />,
      LargeImage: <LargeImage {...(item as unknown as ImgType)} />,
      Charts: <Charts {...(item as unknown as ChartsProps)} />,
    };
    const DynamicComponent = componentMap[componentType];
    if (!DynamicComponent) {
      return null;
    }
    return DynamicComponent;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
      _type,
      ${Benefits_Query}
      ${Perks_Query}
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
    _type == 'Idea' => @ {
      paragraph,
      additionalInfo,
      chartParagraph,
      heading,
      claim,
      chart[] {
        title,
        description
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
      }
    }
`;
