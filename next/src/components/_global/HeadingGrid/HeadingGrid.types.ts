import { type ImgType } from '@/global/types';

export type Props = {
  heading: string;
  list: {
    description: string;
    title: string;
    img: ImgType;
  }[];
};
