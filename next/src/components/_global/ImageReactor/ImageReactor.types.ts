import type { CtaType, ImgType } from '@/global/types';

export type ImageReactorTypes = {
  heading: string;
  paragraph: string;
  cta: CtaType;
  additionalInfo: string;
  img: ImgType;
  isHighlighted?: boolean;
};
