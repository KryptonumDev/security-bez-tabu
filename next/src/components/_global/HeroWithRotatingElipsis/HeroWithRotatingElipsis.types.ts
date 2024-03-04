import { type ImgType, type Cta } from '@/global/types';

export type Props = {
  heading: string;
  paragraph: string;
  claim: string;
  cta: Cta;
  additionalInfo: string;
  img: ImgType;
  products: {
    title: string;
    description: string;
    img: ImgType;
  }[];
};
