import BadgeIconSection from './BadgeIconSection';
export default BadgeIconSection;
import { Img_Query } from '@/components/ui/image';
export type { BadgeIconSectionTypes } from './BadgeIconSection.types';

export const BadgeIconSection_Query = `
  _type == "BadgeIconSection" => {
    icon {
      ${Img_Query}
    },
    heading,
    paragraph,
  },
`;
