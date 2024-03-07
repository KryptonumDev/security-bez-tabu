import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  img: ImgType;
  subheading: string;
  achievements: {
    title: string;
    img: ImgType;
  }[];
  paragraph: string;
};
