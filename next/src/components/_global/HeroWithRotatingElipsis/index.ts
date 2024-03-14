import HeroWithRotatingElipsis from './HeroWithRotatingElipsis';
export default HeroWithRotatingElipsis;
import { Img_Query } from '@/components/ui/image';
import { Cta_Query } from '@/components/ui/Button';
export type { HeroWithRotatingElipsisTypes } from './HeroWithRotatingElipsis.types';

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
      },
    },
    claim,
    img {
      ${Img_Query}
    },
  },
`;
