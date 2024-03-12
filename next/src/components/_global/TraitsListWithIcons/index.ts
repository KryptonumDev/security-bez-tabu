import TraitsListWithIcons from './TraitsListWithIcons';
export default TraitsListWithIcons;
import { Img_Query } from '@/components/ui/image';
export type { TraitsListWithIconsTypes } from './TraitsListWithIcons.types';

export const TraitsListWithIcons_Query = /* groq */ `
  _type == 'TraitsListWithIcons' => {
    heading,
    list[] {
      icon {
        ${Img_Query}
      },
      heading,
      paragraph,
    },
  },
`;
