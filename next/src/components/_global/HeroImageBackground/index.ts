import HeroImageBackground from './HeroImageBackground';
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export default HeroImageBackground;
export type { HeroImageBackgroundTypes } from './HeroImageBackground.types';

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
