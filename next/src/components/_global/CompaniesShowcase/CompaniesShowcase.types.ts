import type { ImgType } from '@/global/types';

export type CompaniesShowcaseTypes = {
  heading: string;
  list: {
    name: string;
    img: ImgType;
    href?: string;
  }[];
};
