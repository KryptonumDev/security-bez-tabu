import HeroCentralizedTextAndTransparentImage from './HeroImageBackground';
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export default HeroCentralizedTextAndTransparentImage;
export type { Props as HeroCentralizedTextAndTransparentImageProps } from './HeroImageBackground.types';

export const HeroImageBackground_Query = /* groq */ `
  _type == 'HeroImageBackground' => {
    heading,
    additionalInfo,
    description,
    cta {
      ${Cta_Query}
    },
    img {
      ${Img_Query}
    }
  },`;
