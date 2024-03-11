import AdvancedCtaSection from './AdvancedCtaSection';
import { Button_Query } from '@/components/ui/Button';

export default AdvancedCtaSection;
export type { Props as AdvancedCtaSectionProps } from './AdvancedCtaSection.types';

export const AdvancedCtaSection_Query = /* groq */ `
  _type == 'AdvancedCtaSection' => {
    advancedCtaSection_LeftSide {
      heading,
      description,
    },
    advancedCtaSection_RightSide {
      heading,
      additionalInfo,
      cta {
        ${Button_Query}
      },
    },
  },`;