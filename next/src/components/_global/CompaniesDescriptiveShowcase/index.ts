import { Img_Query } from '@/components/ui/image';
import CompaniesDescriptiveShowcase from './CompaniesDescriptiveShowcase';
export default CompaniesDescriptiveShowcase;
export type { CompaniesDescriptiveShowcaseTypes } from './CompaniesDescriptiveShowcase.types';

export const CompaniesDescriptiveShowcase_Query = `
  _type == "CompaniesDescriptiveShowcase" => {
    heading,
    paragraph,
    list[] {
      img {
        ${Img_Query}
      },
      heading,
      paragraph
    } 
  },
`;
