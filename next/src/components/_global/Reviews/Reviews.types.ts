import type { ImgType } from '@/global/types';

export type ReviewsTypes = {
  heading: string;
  list: {
    img?: ImgType;
    name: string;
    position?: string;
    text: string;
  }[];
};
