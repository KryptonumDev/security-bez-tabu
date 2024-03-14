import { type ImgType } from '@/global/types';

export type PersonPresentationTypes = {
  heading: string;
  img: ImgType;
  subheading: string;
  achievements: {
    title: string;
    icon: ImgType;
  }[];
  paragraph: string;
};
