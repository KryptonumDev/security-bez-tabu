import type { ImgType, CtaType } from '@/global/types';

export type HeroWithRotatingElipsisTypes = {
  heading: string;
  paragraph: string;
  claim: string;
  cta: CtaType;
  additionalInfo: string;
  img: ImgType;
  products: {
    title: string;
    description: string;
    img: ImgType;
  }[];
  countdown_Date?: string;
};
