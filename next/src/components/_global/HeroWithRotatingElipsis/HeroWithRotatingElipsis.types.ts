import type { ImgType, CtaType } from '@/global/types';

export type HeroWithRotatingElipsisTypes = {
  heading: string;
  paragraph: string;
  claim: string;
  cta: CtaType;
  additionalInfo: string;
  img: ImgType;
  products: {
    img: ImgType;
    title: string;
    description: string;
  }[];
  countdown_Date?: string;
};
