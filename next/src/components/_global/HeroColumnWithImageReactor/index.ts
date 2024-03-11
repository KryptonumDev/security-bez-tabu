import HeroColumnWithImageReactor from './HeroColumnWithImageReactor';
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export default HeroColumnWithImageReactor;
export type { Props as HeroColumnWithImageReactorProps } from './HeroColumnWithImageReactor.types';

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
