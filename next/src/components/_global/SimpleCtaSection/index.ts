import SimpleCtaSection from './SimpleCtaSection';
export default SimpleCtaSection;
import { Cta_Query } from '@/components/ui/Button';
export type { SimpleCtaSectionTypes } from './SimpleCtaSection.types';

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
