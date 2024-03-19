import type { HTMLMotionProps } from 'framer-motion';
import type { ImgType } from '@/global/types';

export type BenefitsItemsTypes = {
  heading: string;
  list: {
    icon: ImgType;
    paragraph: string;
  }[];
};

export type ItemTypes = {
  children: React.ReactNode;
  index: number;
} & HTMLMotionProps<'li'>;
