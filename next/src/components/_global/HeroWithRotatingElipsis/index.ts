import HeroWithRotatingElipsis from './HeroWithRotatingElipsis';
export default HeroWithRotatingElipsis;
import { Img_Query } from '@/components/ui/image';
import { Cta_Query } from '@/components/ui/Button';
export type { HeroWithRotatingElipsisTypes } from './HeroWithRotatingElipsis.types';

export const HeroWithRotatingElipsis_Query = `
  _type == 'HeroWithRotatingElipsis' => {
    heading,
    paragraph,
    claim,
    cta {
      ${Cta_Query}
    },
    additionalInfo,
    img {
      ${Img_Query}
    },
    products[] {
      img {
        ${Img_Query}
      },
      title,
      description,
    },
  },
`;
