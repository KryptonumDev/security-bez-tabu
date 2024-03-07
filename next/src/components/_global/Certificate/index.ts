import { Img_Query } from '@/components/ui/image';
import Certificate from './Certificate';
export type { Props as CertificateProps } from './Certificate.types';
export default Certificate;

export const Certificate_Query = /* groq */ `
  _type == 'Certificate' => {
    paragraph,
    heading,
    img {
      ${Img_Query}
    },
  },
`;
