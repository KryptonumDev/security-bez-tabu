import type { ImgType } from '@/global/types';

export type SimpleDescriptiveGridTypes = {
  heading: string;
  grid: {
    icon: ImgType;
    heading: string;
    paragraph: string;
  }[];
};
