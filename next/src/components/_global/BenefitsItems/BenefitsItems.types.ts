import type { ImgType } from '@/global/types';

export type BenefitsItemsTypes = {
  heading: string;
  list: {
    icon: ImgType;
    paragraph: string;
  }[];
};
