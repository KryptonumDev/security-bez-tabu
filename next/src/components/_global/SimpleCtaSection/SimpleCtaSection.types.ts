import type { CtaType } from '@/global/types';

export type SimpleCtaSectionTypes = {
  heading: string;
  cta: CtaType;
  additionalInfo?: string;
  isCountdown: boolean;
  countdown_Date?: string;
};
