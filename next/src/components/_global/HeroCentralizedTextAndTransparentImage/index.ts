import HeroCentralizedTextAndTransparentImage from './HeroCentralizedTextAndTransparentImage';
import { Button_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';

export default HeroCentralizedTextAndTransparentImage;
export type { Props as HeroCentralizedTextAndTransparentImageProps } from './HeroCentralizedTextAndTransparentImage.types';

export const HeroCentralizedTextAndTransparentImage_Query = /* groq */ `
  _type == 'HeroCentralizedTextAndTransparentImage' => {
    heading,
    additionalInfo,
    description,
    cta {
      ${Button_Query}
    },
    img {
      ${Img_Query}
    }
  },`;
