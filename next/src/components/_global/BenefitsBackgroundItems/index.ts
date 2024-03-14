import { Img_Query } from '@/components/ui/image';
import BenefitsBackgroundItems from './BenefitsBackgroundItems';
export default BenefitsBackgroundItems;
export type { BenefitsBackgroundItemsTypes } from './BenefitsBackgroundItems.types';

export const BenefitsBackgroundItems_Query = `
  _type == "BenefitsBackgroundItems" => {
    heading,
    list[] {
      icon {
        ${Img_Query}
      },
      title,
      paragraph
    },
  },
`;
