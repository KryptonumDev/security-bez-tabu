import CtaSection from './CtaSection';

export type { Props as CtaSectionProps } from './CtaSection.types';
export default CtaSection;

export const CtaSection_Query = /* groq */ `
_type == 'CtaSection' => {
  isCountdown,
  heading,
  additionalInfo,
  cta {
    theme,
    href,
    text
  }
},
`;