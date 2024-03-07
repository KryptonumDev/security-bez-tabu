import ListPillWithIconHeading from './ListPillWithIconHeading';
import { Img_Query } from '@/components/ui/image';
export default ListPillWithIconHeading;
export type { Props as ListPillWithIconHeadingProps } from './ListPillWithIconHeading.types';

export const ListPillWithIconHeading_Query = /* groq */ `
  _type == 'ListPillWithIconHeading' => {
    heading,
    list[] {
      title,
      description,
      img {
        ${Img_Query}
      }
    }
  }
`;
