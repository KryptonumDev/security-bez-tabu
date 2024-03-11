import CtaSection from './CtaSection';
import { Cta_Query } from '@/components/ui/Button';
export type { Props as CtaSectionProps } from './CtaSection.types';
export default CtaSection;

export const CtaSection_Query = /* groq */ `
  _type == 'CtaSection' => {
    isCountdown,
    heading,
    additionalInfo,
    cta {
      ${Cta_Query}
    },
  },
`;
