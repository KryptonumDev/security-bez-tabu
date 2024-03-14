import Reviews from './Reviews';
export default Reviews;
import { Img_Query } from '@/components/ui/image';
export type { ReviewsTypes } from './Reviews.types';

export const Reviews_Query = /* groq */ `
  _type == 'Reviews' => {
    heading,
    list[] -> {
      img {
        ${Img_Query}
      },
      name,
      position,
      text,
    },
  },
`;
