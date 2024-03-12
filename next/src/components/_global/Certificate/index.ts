import { Img_Query } from '@/components/ui/image';
import Certificate from './Certificate';
import { Cta_Query } from '@/components/ui/Button';
export type { Props as CertificateProps } from './Certificate.types';
export default Certificate;

export const Certificate_Query = /* groq */ `
  _type == 'Certificate' => {
    paragraph,
    heading,
    cta {
      ${Cta_Query}
    },
    additionalInfo,
    imageReactor {
      ${Img_Query}
    },
    isHighlighted,
  },
`;
