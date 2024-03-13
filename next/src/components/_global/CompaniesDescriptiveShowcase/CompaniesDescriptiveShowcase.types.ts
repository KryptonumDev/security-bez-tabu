import { ImgType } from '@/global/types';

export type CompaniesDescriptiveShowcaseTypes = {
  heading: string;
  paragraph: string;
  list: {
    img: ImgType;
    heading: string;
    paragraph: string;
  };
};
