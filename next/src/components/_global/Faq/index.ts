import Faq from './Faq';

export type { Props as FaqProps } from './Faq.types';
export default Faq;

export const Faq_Query = /* groq */ `
_type == 'Faq' => {
  heading,
  paragraph,
    list[] {
      description,
      title
    }
},`;