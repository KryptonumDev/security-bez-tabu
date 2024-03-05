import CompaniesShowcase from './CompaniesShowcase';
import { Img_Query } from '@/components/ui/image';

export default CompaniesShowcase;
export type { Props as CompaniesShowcaseProps } from './CompaniesShowcase.types';
export const CompaniesShowcase_Query = /* groq */ `
_type == 'CompaniesShowcase' => {
  heading,
  list[] {
    name,
    href,
    img {
      ${Img_Query}
    }
  },
},`;
