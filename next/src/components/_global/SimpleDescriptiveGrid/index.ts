import { Img_Query } from '@/components/ui/image';
import SimpleDescriptiveGrid from './SimpleDescriptiveGrid';
export default SimpleDescriptiveGrid;
export type { SimpleDescriptiveGridTypes } from './SimpleDescriptiveGrid.types';

export const SimpleDescriptiveGrid_Query = `
  _type == "SimpleDescriptiveGrid" => {
    heading,
    grid[] {
      icon {
        ${Img_Query}
      },
      title,
      description,
    }
  },
`;
