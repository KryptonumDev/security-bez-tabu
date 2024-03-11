import Newsletter from './Newsletter';
import { Cta_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
export default Newsletter;
export type { Props as NewsletterProps } from './Newsletter.types';

export const Newsletter_Query = /* groq */ `
  _type == 'Newsletter' => {
    heading,
    paragraph,
    cta {
      ${Cta_Query}
    },
    image {
      ${Img_Query}
    },
  },
`;
