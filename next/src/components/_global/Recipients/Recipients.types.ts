import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  list: {
    title: string;
    img: ImgType;
  }[];
};
