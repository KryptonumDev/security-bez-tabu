import type { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  description: string;
  additionalInfo: string;
  image: ImgType;
  cta: CtaType;
};
