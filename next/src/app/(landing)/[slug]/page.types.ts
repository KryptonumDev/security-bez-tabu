import type { ComponentsType } from '@/components/Components';
import type { ImgType } from '@/global/types';

export type PageQueryType = {
  name: string;
  slug: string;
  hero_Heading: string;
  hero_Paragraph: string;
  hero_Claim: string;
  hero_Cta: {
    theme: string;
    text: string;
    href: string;
  };
  hero_AdditionalInfo: string;
  hero_Img: ImgType;
  hero_Products: {
    title: string;
    description: string;
    img: ImgType;
  }[];
  content: ComponentsType;
};
