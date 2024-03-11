import Newsletter from './Newsletter';
import { Img_Query } from '@/components/ui/image';
export default Newsletter;
export type { NewsletterTypes } from './Newsletter.types';

export const Newsletter_Query = /* groq */ `
  _type == 'Newsletter' => {
    heading,
    paragraph,
    image {
      ${Img_Query}
    },
  },
`;
