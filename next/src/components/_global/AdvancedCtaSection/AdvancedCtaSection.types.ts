import type { CtaType } from '@/global/types';

export type AdvancedCtaSectionTypes = {
  heading: string;
  paragraph: string;
  secondHeading: string;
  cta: CtaType;
  additionalInfo?: string;
};
