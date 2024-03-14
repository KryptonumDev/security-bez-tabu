import { Img_Query } from '@/components/ui/image';
import BenefitsItems from './BenefitsItems';
export type { BenefitsItemsTypes } from './BenefitsItems.types';
export default BenefitsItems;

export const BenefitsItems_Query = /* groq */ `
  _type == 'BenefitsItems' => {
    heading,
    list[] {
      icon {
        ${Img_Query}
      },
      paragraph,
    },
  },
`;
