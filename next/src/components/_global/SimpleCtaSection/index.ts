import { Cta_Query } from '@/components/ui/Button';
import CtaSection from './SimpleCtaSection';
export type { Props as SimpleCtaSectionProps } from './SimpleCtaSection.types';
export default CtaSection;

export const SimpleCtaSection_Query = /* groq */ `
  _type == 'SimpleCtaSection' => {
    isCountdown,
    heading,
    additionalInfo,
    cta {
      ${Cta_Query}
    },
  },
`;
