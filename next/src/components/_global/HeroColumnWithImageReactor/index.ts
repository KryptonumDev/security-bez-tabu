import HeroColumnWithImageReactor from './HeroColumnWithImageReactor';
export default HeroColumnWithImageReactor;
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export type { HeroColumnWithImageReactorTypes } from './HeroColumnWithImageReactor.types';

export const HeroColumnWithImageReactor_Query = /* groq */ `
  _type == "HeroColumnWithImageReactor" => {
    paragraph,
    img {
      ${Img_Query}
    },
    heading,
    additionalInfo,
    cta {
      ${Cta_Query}
    },
  },
`;
