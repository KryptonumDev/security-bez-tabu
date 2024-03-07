import { Img_Query } from '@/components/ui/image';
import Benefits from './Benefits';
export type { Props as BenefitsProps } from './Benefits.types';
export default Benefits;

export const Benefits_Query = /* groq */ `
  _type == 'Benefits' => {
    heading,
    list[] {
      description,
      title,
      img {
        ${Img_Query}
      },
    },
  },
`;
