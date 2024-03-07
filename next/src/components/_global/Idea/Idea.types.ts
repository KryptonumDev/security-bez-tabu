import type { CtaType } from '@/global/types';

export type Props = {
  heading: string;
  paragraph: string;
  claim: string;
  cta: CtaType;
  additionalInfo: string;
  chartParagraph: string;
  chart: {
    title: string;
    description: string;
  }[];
};
