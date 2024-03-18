import HeroImageBackground from './HeroImageBackground';
export default HeroImageBackground;
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export type { HeroImageBackgroundTypes } from './HeroImageBackground.types';

export const HeroImageBackground_Query = /* groq */ `
  _type == 'HeroImageBackground' => {
    heading,
    paragraph,
    cta {
      ${Cta_Query}
    },
    img {
      ${Img_Query}
    },
  },
`;
