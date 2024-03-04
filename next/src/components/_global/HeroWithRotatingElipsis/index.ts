import HeroWithRotatingElipsis from './HeroWithRotatingElipsis';
import { Img_Query } from '@/components/ui/image';
import { Button_Query } from '@/components/ui/Button';

export type { Props as HeroWithRotatingElipsisProps } from './HeroWithRotatingElipsis.types';
export default HeroWithRotatingElipsis;

export const HeroWithRotatingElipsis_Query = `
_type == 'HeroWithRotatingElipsis' => {
  additionalInfo,
  cta {
    ${Button_Query}
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
  }
},`;
