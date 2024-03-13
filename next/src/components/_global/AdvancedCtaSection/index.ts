import AdvancedCtaSection from './AdvancedCtaSection';
export default AdvancedCtaSection;
import { Cta_Query } from '@/components/ui/Button';
export type { AdvancedCtaSectionTypes } from './AdvancedCtaSection.types';

export const AdvancedCtaSection_Query = /* groq */ `
  _type == 'AdvancedCtaSection' => {
    heading,
    paragraph,
    secondHeading,
    cta {
      ${Cta_Query}
    },
    additionalInfo,
  },
`;
