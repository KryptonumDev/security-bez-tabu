import CompaniesShowcase from './CompaniesShowcase';
export default CompaniesShowcase;
import { Img_Query } from '@/components/ui/image';
export type { CompaniesShowcaseTypes } from './CompaniesShowcase.types';

export const CompaniesShowcase_Query = /* groq */ `
  _type == 'CompaniesShowcase' => {
    heading,
    list[] {
      name,
      img {
        ${Img_Query}
      },
      href,
    },
  },
`;
