import Newsletter from './Newsletter';
import { Img_Query } from '@/components/ui/image';

export default Newsletter;
export type { Props as NewsletterProps } from './Newsletter.types';
export const Newsletter_Query = /* groq */ `
_type == 'Newsletter' => {
  heading,
  paragraph,
  cta {
    theme,
    href,
    text
  },
  image {
    ${Img_Query}
  },
},`;
