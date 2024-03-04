import HeroColumnWithImageRefactor from './HeroColumnWithImageRefactor';
import { Img_Query } from '@/components/ui/image';
import { Button_Query } from '@/components/ui/Button';

export default HeroColumnWithImageRefactor;
export type { Props as HeroColumnWithImageRefactorProps } from './HeroColumnWithImageRefactor.types';

export const HeroColumnWithImageRefactor_Query = /* groq */ `
  _type == "HeroColumnWithImageRefactor" => {
    paragraph,
    img {
      ${Img_Query}
    },
    heading,
    additionalInfo,
    cta {
      ${Button_Query}
    }
  },
`;
