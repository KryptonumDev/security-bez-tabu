import { Img_Query } from '@/components/ui/image';
import Recipients from './Recipients';
export type { Props as RecipientsProps } from './Recipients.types';
export default Recipients;

export const Recipients_Query = /* groq */ `
  _type == 'Recipients' => {
    heading,
    list[] {
      title,
      img {
        ${Img_Query}
      },
    },
  },
`;
