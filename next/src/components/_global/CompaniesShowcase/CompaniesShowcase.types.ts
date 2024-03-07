import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  list: {
    name: string;
    img: ImgType;
    href: string;
  }[];
};
