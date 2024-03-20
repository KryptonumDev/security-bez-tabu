import type { HTMLMotionProps } from 'framer-motion';

export type PerksTypes = {
  heading: string;
  list: {
    title: string;
    description: string;
  }[];
};

export type ItemTypes = {
  children: React.ReactNode;
  index: number;
} & HTMLMotionProps<'li'>;
