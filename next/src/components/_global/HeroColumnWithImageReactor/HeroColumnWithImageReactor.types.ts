import type { CtaType, ImgType } from '@/global/types';

export type HeroColumnWithImageReactorTypes = {
  heading: string;
  paragraph: string;
  cta: CtaType;
  additionalInfo?: string;
  img: ImgType;
};
