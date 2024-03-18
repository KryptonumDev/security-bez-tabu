import { ImgType } from '@/global/types';

export type TeamIntroductionTypes = {
  heading: string;
  paragraph: string;
  list: {
    img: ImgType;
    name: string;
    description?: string;
  }[];
};
