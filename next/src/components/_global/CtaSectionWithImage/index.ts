import CtaSectionWithImage from './CtaSectionWithImage';
import { Button_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';

export default CtaSectionWithImage;
export type { Props as CtaSectionWithImageProps } from './CtaSectionWithImage.types';

export const CtaSectionWithImage_Query = /* groq */ `
  _type == "CtaSectionWithImage" => {
    heading,
    additionalInfo,
    description,
    cta {
      ${Button_Query}
    },
    img {
      ${Img_Query}
    }
  },
`;
