import { Img_Query } from '@/components/ui/image';
import Reviews from './Reviews';
export type { Props as ReviewsProps } from './Reviews.types';
export default Reviews;

export const Reviews_Query = /* groq */ `
  _type == 'Reviews' => {
    heading,
    list[] {
      name,
      position,
      content,
      img {
        ${Img_Query}
      },
    },
  },
`;
