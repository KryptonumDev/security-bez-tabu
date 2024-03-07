import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  list: {
    img?: ImgType | undefined;
    content: string;
    name: string;
    position: string;
  }[];
};
