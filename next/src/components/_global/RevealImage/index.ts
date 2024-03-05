import RevealImage from './RevealImage';
import { Img_Query } from '@/components/ui/image';

export default RevealImage;
export type { Props as RevealImageProps } from './RevealImage.types';
export const RevealImage_Query = /* groq */ `
  _type == "RevealImage" => {
    heading,
    description,
    img {
      ${Img_Query}
    },
  },
`;
