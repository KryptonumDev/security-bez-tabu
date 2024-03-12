import type { ImgType } from '@/global/types';

export type TraitsListWithIconsTypes = {
  heading: string;
  list: {
    icon: ImgType;
    heading: string;
    paragraph: string;
  }[];
};
