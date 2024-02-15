import { type Cta } from '@/global/types';

export type Props = {
  heading: string;
  paragraph: string;
  claim: string;
  cta: Cta;
  additionalInfo: string;
  chartParagraph: string;
  chart: {
    title: string;
    description: string;
  }[];
};
