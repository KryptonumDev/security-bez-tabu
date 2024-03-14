import type { CtaType, ImgType } from '@/global/types';

export type ImageReactorTypes = {
  isHighlighted: boolean;
  heading: string;
  paragraph: string;
  cta?: CtaType;
  additionalInfo?: string;
  img: ImgType;
};
