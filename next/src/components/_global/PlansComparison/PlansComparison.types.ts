import type { CtaType } from '@/global/types';

export type PlansComparisonTypes = {
  heading: string;
  plans: {
    isMostPopular?: boolean;
    heading: string;
    price: string;
    features: string[];
    cta: CtaType;
  }[];
};
