import HeadingGrid from './HeadingGrid';
import { Img_Query } from '@/components/ui/image';

export default HeadingGrid;
export type { Props as HeadingGridProps } from './HeadingGrid.types';

export const HeadingGrid_Query = /* groq */ `
  _type == 'HeadingGrid' => {
    heading,
    list[] {
      description,
      title,
      img {
        ${Img_Query}
      }
    },
  },`;
