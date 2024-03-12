import { ImgType } from '@/global/types';

export type SimpleDescriptiveGridTypes = {
  heading: string;
  grid: {
    icon: ImgType;
    title: string;
    description: string;
  }[];
};
