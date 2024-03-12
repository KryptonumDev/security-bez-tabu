import { type ImgType } from '@/global/types';

export type PersonPresentationTypes = {
  heading: string;
  img: ImgType;
  subheading: string;
  achievements: {
    icon: ImgType;
    description: string;
  }[];
  paragraph: string;
};
