import type { ImgType } from '@/global/types';

export type CompaniesDescriptiveShowcaseTypes = {
  heading: string;
  paragraph: string;
  list: {
    img: ImgType;
    name: string;
    description: string;
  }[];
};
