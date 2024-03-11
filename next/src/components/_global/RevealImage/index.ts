import RevealImage from './RevealImage';
export default RevealImage;
import { Img_Query } from '@/components/ui/image';
export type { RevealImageTypes } from './RevealImage.types';

export const RevealImage_Query = /* groq */ `
  _type == "RevealImage" => {
    heading,
    paragraph,
    img {
      ${Img_Query}
    },
  },
`;
