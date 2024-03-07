import HeroWithRotatingElipsis from './HeroWithRotatingElipsis';
import { Img_Query } from '@/components/ui/image';
import { Cta_Query } from '@/components/ui/Button/Button';
export type { Props as HeroWithRotatingElipsisProps } from './HeroWithRotatingElipsis.types';
export default HeroWithRotatingElipsis;

export const HeroWithRotatingElipsis_Query = /* groq */ `
  _type == 'HeroWithRotatingElipsis' => {
    additionalInfo,
    cta {
      ${Cta_Query}
    },
    heading,
    paragraph,
    products[] {
      description,
      title,
      img {
        ${Img_Query}
      }
    },
    claim,
    img {
      ${Img_Query}
    },
  },
`;
