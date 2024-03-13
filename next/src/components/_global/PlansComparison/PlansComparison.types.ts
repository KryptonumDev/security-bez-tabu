import { type CtaType } from '@/global/types';

export type PlansComparisonTypes = {
  heading: string;
  plans: {
    isMostPopular: boolean;
    plans: {
      heading: string;
      price: number;
      features: string[];
      cta: CtaType;
    }[];
  }[];
};
