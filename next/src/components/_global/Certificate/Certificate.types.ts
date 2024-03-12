import type { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  paragraph: string;
  cta: CtaType;
  additionalInfo: string;
  imageReactor: ImgType;
  isHighlighted?: boolean;
};
